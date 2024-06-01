from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from apps.transaction.models import Payment, BalanceTransactionHistory
from .serializers import PaymentSerializer, BalanceTransactionHistorySerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

    @action(detail=True, methods=['post'])
    def update_status(self, request, pk=None):
        payment = self.get_object()
        new_status = request.data.get('status')
        if new_status in ['pending', 'completed', 'failed', 'cancelled']:
            payment.status = new_status
            payment.save()

            # Обновление записи в BalanceTransactionHistory
            transaction = BalanceTransactionHistory.objects.filter(payment=payment).first()
            if transaction:
                transaction.status = new_status
                transaction.save()

                if new_status == 'completed':
                    # Обновление баланса организации
                    organization = payment.organization
                    organization.balance += payment.amount
                    organization.save()

            return Response({'status': 'status updated'})
        else:
            return Response({'error': 'Invalid status'}, status=status.HTTP_400_BAD_REQUEST)


class BalanceTransactionHistoryViewSet(viewsets.ModelViewSet):
    queryset = BalanceTransactionHistory.objects.all()
    serializer_class = BalanceTransactionHistorySerializer

    @action(detail=True, methods=['post'])
    def add_comment(self, request, pk=None):
        transaction = self.get_object()
        comment = request.data.get('comment')
        transaction.comment = comment
        transaction.save()
        return Response({'status': 'comment added'})

    def perform_create(self, serializer):
        transaction = serializer.save()
        organization = transaction.organization

        if transaction.status == 'completed':
            if transaction.transaction_type == 'replenishment':
                organization.balance += transaction.transaction_balance
            elif transaction.transaction_type == 'manual_debiting':
                organization.balance -= transaction.transaction_balance

            transaction.before_balance = organization.balance
            transaction.after_balance = organization.balance + transaction.transaction_balance if transaction.transaction_type == 'replenishment' else organization.balance - transaction.transaction_balance
            organization.save()
        transaction.save()
