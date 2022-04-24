from django.db import models

class Projeto(models.Model):
    nome = models.CharField(max_length=30)
    dataInicio = models.CharField(max_length=10)
    dataTermino = models.CharField(max_length=10)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    risco = models.IntegerField()
    participantes = models.TextField()

    def __str__(self):
        return self.nome