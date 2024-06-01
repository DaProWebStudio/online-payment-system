from django.db.models.signals import post_save
from django.dispatch import receiver

from apps.transaction.models import Payment, BalanceTransactionHistory


@receiver(post_save, sender=Payment)
def create_transaction(sender, instance, created, **kwargs):
    if created:
        if instance.amount > 10:
            BalanceTransactionHistory.objects.create(
                payment_id=instance.id,
                organization_id=instance.organization_id,
                transaction_balance=instance.amount,
                transaction_type='replenishment',
                status='completed',
            )
            instance.status = 'completed'
            instance.save()
        else:
            instance.status = 'failed'
            instance.save()
