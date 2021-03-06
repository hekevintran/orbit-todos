from django.conf.urls import include
from django.contrib import admin
from django.urls import path

from rest_framework import routers

from todos import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'todos', views.TodoViewSet)
# router.register(r'utodos/(?P<uuid>[0-9A-Fa-f-]+)/$', views.TodoUuidViewSet)

urlpatterns = [
    path('api-orbit/', include(router.urls)),
    path('admin-orbit/', admin.site.urls),
    path('api-auth-orbit/', include(
        'rest_framework.urls', namespace='rest_framework'))
]
