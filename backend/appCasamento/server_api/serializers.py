from django.contrib.auth.models import Group, User
from rest_framework import serializers

from .models import Evento, Convidado

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        

class EventoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evento
        fields = '__all__'

class ConvidadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Convidado
        fields = '__all__'
        