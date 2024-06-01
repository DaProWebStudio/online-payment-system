from rest_framework.routers import SimpleRouter

from .organization.views import OrganizationViewSet
from .transaction.views import PaymentViewSet, BalanceTransactionHistoryViewSet
from .user.views import UserViewSet

router = SimpleRouter()
router.register("users", UserViewSet)
router.register("payments", PaymentViewSet)
router.register("transactions", BalanceTransactionHistoryViewSet)
router.register("organizations", OrganizationViewSet)

urlpatterns = router.urls
