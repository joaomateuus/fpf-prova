from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Projeto
from .serializers import ProjetoSerializers

class ProjetoViewSet(ModelViewSet):
    queryset = Projeto.objects.all()
    serializer_class = ProjetoSerializers
     