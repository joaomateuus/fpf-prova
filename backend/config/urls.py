from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from projeto.views import ProjetoViewSet

router = DefaultRouter()
router.register('projetos', ProjetoViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('admin/', admin.site.urls),
]
