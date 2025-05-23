"""
URL configuration for appCasamento project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from .views import ConvidadoViewSet
from appCasamento.server_api.views import EnviarEmailView



from appCasamento.server_api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'convidados', ConvidadoViewSet, basename='convidados')
router.register(r'eventos', views.EventoViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('convidados/<int:pk>/update-presente/', ConvidadoViewSet.as_view({'patch': 'update_presente'}), name='update-presente'),
    path('enviar-email/', EnviarEmailView.as_view(), name='enviar-email'),
    path('api/', include('server_api.urls')),

]