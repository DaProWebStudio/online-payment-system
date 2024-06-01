from django.contrib import admin

from apps.transaction.models import BalanceTransactionHistory, Payment


@admin.register(BalanceTransactionHistory)
class BalanceTransactionHistoryAdmin(admin.ModelAdmin):
    list_display = ('organization', 'transaction_balance', 'before_balance', 'after_balance', 'status')
    fields = ['payment', 'organization', 'before_balance', 'after_balance', 'transaction_balance', 'transaction_type',
              'status', 'comment', 'created_at']
    readonly_fields = ['before_balance', 'after_balance', 'transaction_balance', 'organization', 'transaction_type',
                       'created_at']
    list_filter = ['status', 'created_at', 'transaction_balance', 'transaction_type']
    search_fields = ['organization__title', 'payment__transaction_id']
    date_hierarchy = 'created_at'


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ('id', 'organization', 'amount', 'status', 'status', 'created_at', 'transaction_id')
    fields = ['organization', 'amount', 'status', 'transaction_id', 'created_at', 'updated_at']
    readonly_fields = ['created_at', 'updated_at', 'status']
    list_filter = ['status', 'created_at', 'amount']
    search_fields = ['organization__title', 'transaction_id']
    date_hierarchy = 'created_at'
