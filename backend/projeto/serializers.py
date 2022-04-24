from rest_framework.serializers import ModelSerializer
from .models import Projeto

class ProjetoSerializers(ModelSerializer):
    class Meta:
        model = Projeto
        fields = ['id', 'nome', 'dataInicio', 'dataTermino', 'valor', 'risco', 'participantes']