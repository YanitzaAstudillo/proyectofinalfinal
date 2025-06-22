
from .models import Usuarios, Contacto, Farmacias, Especialidades, Provincias, Clinicas,Centro
from django.contrib.auth.models import User

from rest_framework import serializers


class UsuarioCompletoSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="usuario.username")
    first_name = serializers.CharField(source="usuario.first_name")
    last_name = serializers.CharField(source="usuario.last_name")
    email= serializers.EmailField(source="usuario.email")

    class Meta:
        model = Usuarios
        fields = ["id","direccion","telefono","esta_asociado","rol","username","first_name","last_name","email",'usuario_id']


class UsuarioEliminarSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


    # rol = serializers.ChoiceField(choices=[('admin', 'Administrador'), ('asociado', 'asociado'), ('usuario', 'Usuario')], default='usuario')


class FarmaciasSerializer(serializers.ModelSerializer):
    class Meta:
        model= Farmacias
        fields= "__all__"


class FarmaciaEliminarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Farmacias
        fieds= "__all__"


class EspecialidadesSerializer (serializers.ModelSerializer):
    class Meta:
        model= Especialidades
        fields= "__all__"

class EspecialidadEliminarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Farmacias
        fieds= "__all__"

class CentroSerializer(serializers.ModelSerializer):
    class Meta:
        model=Centro
        fieds="__all__"

class ProvinciasSerializer (serializers.ModelSerializer):
    class Meta:
        model= Provincias
        fields= "__all__"

class ProvinciaEliminarSerializer(serializers.ModelSerializer):
    class Meta:
        model= Provincias
        fieds= "__all__"

class ClinicasSerializer (serializers.ModelSerializer):
    nombre_Provincia = serializers.CharField(source="Provincias.nombre_Provincia")
    class Meta:
        model= Clinicas
        fields = ['id','nombre_Clinica','direccion_Clinica','horario','telefono_Clinica','Provincias','nombre_Provincia']

class ContactoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contacto
        fields = '__all__'
    def validate_nombre_Contacto(self, value):
        if len(value) <= 3:
            raise serializers.ValidationError('el nombre debe tener al menos 3 caracteres')
        return value