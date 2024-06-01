from rest_framework import serializers

from apps.transaction.models import Payment, BalanceTransactionHistory


class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['id', 'organization', 'amount', 'status', 'transaction_id', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']


class BalanceTransactionHistorySerializer(serializers.ModelSerializer):
    payment = PaymentSerializer(read_only=True)

    class Meta:
        model = BalanceTransactionHistory
        fields = [
            'id', 'payment', 'organization', 'before_balance', 'after_balance',
            'transaction_balance', 'transaction_type', 'status', 'comment', 'created_at'
        ]
        read_only_fields = ['created_at']