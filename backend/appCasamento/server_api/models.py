from django.db import models

# Create your models here.


class Evento(models.Model):
    noiva = models.CharField(max_length=100)
    noivo = models.CharField(max_length=100)
    email = models.EmailField()
    endereco = models.CharField(max_length=255)
    data = models.DateField()
    lista = models.JSONField()
    mensagem = models.TextField()

    def __str__(self):
        return f"{self.noiva} e {self.noivo}"