
from .models import Usuarios, Contacto, Farmacias, Especialidades, Provincias, Clinicas
from rest_framework import serializers

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model= Usuarios
        fields = '__all__'
    def validate_nombre(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError('el nombre debe tener al menos 3 caracteres')
        return value
    
class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contacto
        fields = '__all__'
    def validate_nombre_Contacto(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError('el nombre debe tener al menos 3 caracteres')
        return value
    
class FarmaciasSerializer(serializers.ModelSerializer):
    class Meta:
        model= Farmacias
        fields= "__all__"

class EspecialidadesSerializer (serializers.ModelSerializer):
    class Meta:
        model= Especialidades
        fields= "__all__"

class ProvinciasSerializer (serializers.ModelSerializer):
    class Meta:
        model= Provincias
        fields= "__all__"

class ClinicasSerializer (serializers.ModelSerializer):
    class Meta:
        model= Clinicas
        fields= "__all__"
