from django.db import models

# Create your models here.


class Evento(models.Model):
    noiva = models.CharField(max_length=100)
    noivo = models.CharField(max_length=100)
    email = models.EmailField()
    endereco = models.CharField(max_length=255)
    data = models.DateField()
    mensagem = models.TextField( null=True, blank=True)
    comments = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.noiva} e {self.noivo}"
    

class Convidado(models.Model):
    nome = models.CharField(max_length=100)
    idade = models.IntegerField( null=True, blank=True)
    mesa = models.CharField(max_length=10)
    comentario = models.TextField( null=True, blank=True)
    presente = models.BooleanField(default=False)
    evento = models.ForeignKey(Evento, on_delete=models.CASCADE, related_name='convidados', default=999)

    def __str__(self):
        return self.nome