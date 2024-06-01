from rest_framework import serializers

from apps.transaction.models import Payment


class PaymentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = Payment
        fields = ['user', 'amount', 'status', 'transaction_id', 'created_at', 'updated_at']
        read_only_fields = ['transaction_id', 'created_at', 'updated_at']


class PaymentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['user', 'amount', 'status', 'transaction_id']

    def create(self, validated_data):
        payment = Payment.objects.create(**validated_data)
        return payment
