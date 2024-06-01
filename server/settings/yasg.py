from django.urls import path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

...

schema_view = get_schema_view(
   openapi.Info(
      title="Система приема онлайн-платежей",
      default_version='v1',
      description="Система приема онлайн-платежей представляет собой комплекс технологических решений, обеспечивающих возможность проведения финансовых транзакций в интернете. Эти системы позволяют предприятиям и индивидуальным предпринимателям принимать оплату за товары и услуги через веб-сайты, мобильные приложения и другие онлайн-платформы",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)