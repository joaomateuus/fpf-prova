from rest_framework.serializers import ModelSerializer
from .models import Projeto

class ProjetoSerializers(ModelSerializer):
    class Meta:
        model = Projeto
        fields = ['nome', 'data_inicio', 'data_final', 'valor', 'risco', 'participantes']