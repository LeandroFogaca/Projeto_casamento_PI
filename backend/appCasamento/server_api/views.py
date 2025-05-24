from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from django.core.mail import send_mail

from .models import Convidado, Evento
from .serializers import ConvidadoSerializer, EventoSerializer, ConvidadoUpdatePresenteSerializer

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

    @action(detail=True, methods=['patch'], url_path='update-presente')
    def update_presente(self, request, pk=None):
        convidado = self.get_object()
        serializer = ConvidadoUpdatePresenteSerializer(convidado, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['post'], url_path='send-confirmation-email')
    def send_confirmation_email(self, request, pk=None):
        convidado = self.get_object()
        email = convidado.email  # Certifique-se de que o modelo Convidado tem um campo de e-mail
        subject = "Confirmação de Presença"
        message = f"Olá {convidado.nome},\n\nObrigado por confirmar sua presença no evento!"
        from_email = 'seu_email@gmail.com'

        try:
            send_mail(subject, message, from_email, [email])
            return Response({"message": "E-mail enviado com sucesso!"}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    
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

class EnviarEmailView(APIView):
    def post(self, request):
        destinatario = request.data.get('email')
        nome = request.data.get('nome', 'Convidado')

        # Renderiza o template de e-mail
        mensagem = render_to_string('email_template.html', {'nome': nome})

        send_mail(
            subject='Convite para o casamento',
            message='',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[destinatario],
            html_message=mensagem,
        )
        return Response({'detail': 'E-mail enviado com sucesso!'}, status=status.HTTP_200_OK)