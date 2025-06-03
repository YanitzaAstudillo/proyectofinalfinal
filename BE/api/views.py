from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView,ListAPIView
from .models import Usuarios, Contacto, Farmacias, Especialidades, Provincias, Clinicas
from .serializers import UsuarioCompletoSerializer, ContactoSerializer, FarmaciasSerializer,EspecialidadesSerializer,ProvinciasSerializer,ClinicasSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
#from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



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


class UsuariosDetailView(ListAPIView):
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioCompletoSerializer

class UsuarioEliminarView(RetrieveDestroyAPIView):
    lookup_field = "id"
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioCompletoSerializer

class EditarUsuarioView(APIView):
    def patch(self, request,id):
        username= request.data.get("username")
        first_name= request.data.get("first_name")
        last_name= request.data.get("last_name")
        email= request.data.get("email")
        direccion=request.data.get("direccion")
        telefono=request.data.get("telefono")

        usuario = User.objects.get(id=id)

        if username:
            usuario.username = username
        if first_name:
            usuario.first_name = first_name
        if last_name:
            usuario.last_name = last_name
        if email:
            usuario.email = email

        if telefono:
            usuario.usuarios.telefono = telefono
        if direccion:
            usuario.usuarios.direccion = direccion

        usuario.save()
        usuario.usuarios.save()

        return Response({"exito":"Usuario actualizado"}, status=status.HTTP_200_OK)
    


class CrearVerFarmacia(ListCreateAPIView):
    queryset = Farmacias.objects.all()
    serializer_class = FarmaciasSerializer

class FarmaciasDetailView(ListAPIView):
    
    queryset= Farmacias.objects.all()
    serializer_class= FarmaciasSerializer

class FarmaciaEliminarView(RetrieveDestroyAPIView):
    lookup_field = "id"
    queryset = Farmacias.objects.all()
    serializer_class = FarmaciasSerializer


class EditarFarmaciaView(APIView):
    def patch(self, request, id):
        nombre_Farmacia= request.data.get("nombre_Farmacia")
        direccion_Farmacia= request.data.get("direccion_Farmacia")
        telefono_Farmacia=request.data.get("telefono_Farmacia")
        horario_Farmacia= request.data.get("horario_Farmacia")

        farmacia= Farmacias.objects.get(id=id)

        if nombre_Farmacia:
            farmacia.nombre_Farmacia= nombre_Farmacia
        if direccion_Farmacia:
            farmacia.direccion_Farmacia= direccion_Farmacia
        if telefono_Farmacia:
            farmacia.telefono_Farmacia= telefono_Farmacia
        if horario_Farmacia:
            farmacia.horario_Farmacia= horario_Farmacia

            farmacia.save()
        return Response({"exito":"Farmacia actualizada"}, status=status.HTTP_200_OK)


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

class EspecialidadesDetailView(ListAPIView):
    
    queryset= Especialidades.objects.all()
    serializer_class= EspecialidadesSerializer

class ProvinciasDetailView(ListAPIView):
    
    queryset= Provincias.objects.all()
    serializer_class= ProvinciasSerializer

class ClinicasDetailView(ListAPIView):
    
    queryset= Clinicas.objects.all()
    serializer_class= ClinicasSerializer

class ContactoDetailView(ListAPIView):
    lookup_field = "id"
    queryset= Contacto.objects.all()
    serializer_class= ContactoSerializer