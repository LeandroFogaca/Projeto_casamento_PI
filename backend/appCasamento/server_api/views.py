from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from .models import Convidado, Evento
from .serializers import ConvidadoSerializer, EventoSerializer

from server_api.serializers import GroupSerializer, UserSerializer


class EventoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows events to be viewed or edited.
    """
    queryset = Evento.objects.all()
    serializer_class = EventoSerializer
    # permission_classes = [permissions.IsAuthenticated]

class ConvidadoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows guests to be viewed or edited.
    """
    queryset = Convidado.objects.all()
    serializer_class = ConvidadoSerializer
    # permission_classes = [permissions.IsAuthenticated]


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all().order_by('name')
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]