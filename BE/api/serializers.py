
from .models import Usuarios, Contacto, Farmacias, Especialidades, Provincias, Clinicas
from django.contrib.auth.models import User

from rest_framework import serializers


class UsuarioCompletoSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()

    direccion = serializers.CharField()
    telefono = serializers.CharField()
    esta_afiliado = serializers.BooleanField(default=False)
    
    rol = serializers.ChoiceField(choices=[('admin', 'Administrador'), ('afiliado', 'Afiliado'), ('usuario', 'Usuario')], default='usuario')

    class Meta:
        model = Usuarios
        fields = ['username', 'password', 'first_name', 'last_name', 'email',
                  'direccion', 'telefono', 'esta_afiliado', 'rol']

    def create(self, validated_data):
        username = validated_data.pop('username')
        password = validated_data.pop('password')
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        email = validated_data.pop('email')

        user = User.objects.create_user(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email
        )

        perfil = Usuarios.objects.create(usuario=user, **validated_data)
        return perfil


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
