from django.db import models
from django.conf import settings

from common.constans import BalanceTransactionType


class Payment(models.Model):
    """ Платежи """
    organization = models.ForeignKey("organization.Organization", on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, default='pending')
    transaction_id = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.transaction_id}'

    class Meta:
        verbose_name = "Платеж"
        verbose_name_plural = "Платежи"


class BalanceTransactionHistory(models.Model):
    """ История транзакций баланса """
    TYPE_TRANSACTION = (
        ('replenishment', "Пополнение счета"),
        ('manual_debiting', "Списание со счета"),
    )

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
        ('cancelled', 'Cancelled')
    ]
    payment = models.OneToOneField(Payment, on_delete=models.CASCADE)
    organization = models.ForeignKey(
        "organization.Organization", verbose_name='Организация',
        on_delete=models.CASCADE, related_name='transactions'
    )
    before_balance = models.DecimalField('Баланс до транзакции', max_digits=10, decimal_places=2, null=True, blank=True)
    after_balance = models.DecimalField('Баланс после транзакции', max_digits=10, decimal_places=2, null=True, blank=True)
    transaction_balance = models.DecimalField('Баланс транзакции', max_digits=10, decimal_places=2)
    transaction_type = models.CharField("Тип транзакции", max_length=15, choices=TYPE_TRANSACTION)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='pending')
    comment = models.TextField("Комментарии", blank=True, null=True)

    created_at = models.DateTimeField("Создано", auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.status == 'completed':
            self.before_balance = self.organization.balance
            if self.transaction_type == 'replenishment':
                self.organization.balance += self.transaction_balance
            elif self.transaction_type == 'manual_debiting':
                self.organization.balance -= self.transaction_balance
            self.after_balance = self.organization.balance
            self.organization.save()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.organization} - {self.transaction_type}: {self.transaction_balance}"

    class Meta:
        verbose_name = "История балансовых операций"
        verbose_name_plural = "История балансовых операций"
