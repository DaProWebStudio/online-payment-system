from django.db import models

from common.generate import generate_api_token


class Organization(models.Model):
    """Организация"""
    title = models.CharField(max_length=255)
    balance = models.DecimalField(default=0, max_digits=10, decimal_places=2)
    api_token = models.CharField('API Token', max_length=255, default=generate_api_token, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField("Создано", auto_now_add=True)
    modified_at = models.DateTimeField("Изменено", auto_now=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Организация"
        verbose_name_plural = "Организации"
