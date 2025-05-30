from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Usuarios, Contacto, Farmacias, Especialidades, Provincias, Clinicas
from .serializers import UsuarioCompletoSerializer, ContactoSerializer, FarmaciasSerializer,EspecialidadesSerializer,ProvinciasSerializer,ClinicasSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response




# Create your views here
class CrearUsuarioView(APIView):
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        email = request.data.get("email")

        direccion = request.data.get("direccion")
        telefono = request.data.get("telefono")
        esta_afiliado = request.data.get("esta_afiliado", False)

        usuario = User.objects.create_user(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            email=email
        )

        Usuarios.objects.create(
            usuario=usuario,
            direccion = direccion,
            telefono = telefono,
            esta_afiliado = esta_afiliado,
        )

        return Response({"exito":"Usuario creado"},status=201)

#login con authenticate
class ValidarUsuarioView(APIView):
    def post(self,request):
        username = request.data.get("username")
        password = request.data.get("password")

        usuario= authenticate(username=username, password=password)

        if usuario is not None:
            return Response({"exito":"Usuario validado"},status=200)
        
        else:
            return Response({"error":"Usuario no validado"},status=400)



class CrearVerFarmacia(ListCreateAPIView):
    queryset = Farmacias.objects.all()
    serializer_class = FarmaciasSerializer


class CrearEspecialidadesView(ListCreateAPIView):
    queryset= Especialidades.objects.all()
    serializer_class= EspecialidadesSerializer

class CrearProvinciasView (ListCreateAPIView):
    queryset=Provincias.objects.all()
    serializer_class= ProvinciasSerializer

class CrearClinicasView(ListCreateAPIView):
    queryset= Clinicas.objects.all()
    serializer_class= ClinicasSerializer

class CrearContactoView(ListCreateAPIView):
    queryset= Contacto.objects.all()
    serializer_class= ContactoSerializer


class UsuariosDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioCompletoSerializer

class FarmaciasDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset= Farmacias.objects.all()
    serializer_class= FarmaciasSerializer

class EspecialidadesDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset= Especialidades.objects.all()
    serializer_class= EspecialidadesSerializer

class ProvinciasDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset= Provincias.objects.all()
    serializer_class= ProvinciasSerializer

class ClinicasDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset= Clinicas.objects.all()
    serializer_class= ClinicasSerializer

class ContactoDetailView(RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset= Contacto.objects.all()
    serializer_class= ContactoSerializer