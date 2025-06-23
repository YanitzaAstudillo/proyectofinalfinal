from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveDestroyAPIView,ListAPIView
from .models import Usuarios, Contacto,Farmacias,Especialidades,Provincias, Clinicas,Centro
from .serializers import UsuarioCompletoSerializer, ContactoSerializer, FarmaciasSerializer,EspecialidadesSerializer,ProvinciasSerializer,ClinicasSerializer,CentroSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
#from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken,AccessToken
from rest_framework.permissions import BasePermission, SAFE_METHODS,IsAuthenticated


class permisos(BasePermission):
    def has_permission(self, request, view):
        Usuario= request.user

        if not Usuario.is_authenticated:
            return False
        
        metodo= request.method
        grupos_usuarios= Usuario.groups.values_list('name', flat=True)

        if metodo in SAFE_METHODS:
            return True
        
        if 'paciente' in grupos_usuarios:
            if metodo in ['POST', 'GET']:
                return True
            return False

        if 'administrador' in grupos_usuarios:
            if metodo in ['POST','PUT','PATCH','DELETE','GET']:
                return True
            return False
        
        if 'asociado' in grupos_usuarios:
            if metodo in ['POST','PUT','PATCH','DELETE','GET']:
                return True

        return False


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
            token_acceso = str(AccessToken.for_user(usuario))
            id_usuario = usuario.id
            grupo_usuario = usuario.groups.first().name if usuario.groups.exists() else None
            return Response({"exito":"Usuario validado","token":token_acceso,"id":id_usuario,"grupo_usuario":grupo_usuario},status=200)
        else:
            return Response({"error":"Usuario no validado"},status=400)


class UsuariosDetailView(ListAPIView):
    permission_classes = [permisos]
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioCompletoSerializer

class UsuarioEliminarView(RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Usuarios.objects.all()
    serializer_class = UsuarioCompletoSerializer

class EditarUsuarioView(APIView):
    permission_classes = [IsAuthenticated]
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
    # permission_classes= [permisos]
    queryset = Farmacias.objects.all()
    serializer_class = FarmaciasSerializer

class FarmaciasDetailView(ListAPIView):
    
    queryset= Farmacias.objects.all()
    serializer_class= FarmaciasSerializer

class FarmaciaEliminarView(RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Farmacias.objects.all()
    serializer_class = FarmaciasSerializer

class EditarFarmaciaView(APIView):
    permission_classes = [IsAuthenticated]
    def patch(self, request, id):
        nombre_Farmacia= request.data.get("nombre_Farmacia")
        direccion_Farmacia= request.data.get("direccion_Farmacia")
        telefono_Farmacia=request.data.get("telefono_Farmacia")
        horario_Farmacia= request.data.get("horario_Farmacia")
        sucursales_Farmacia=request.data.get("sucursales_Farmacia")
        img = request.data.get("img")

        farmacia= Farmacias.objects.get(id=id)

        if nombre_Farmacia:
            farmacia.nombre_Farmacia= nombre_Farmacia
        if direccion_Farmacia:
            farmacia.direccion_Farmacia= direccion_Farmacia
        if telefono_Farmacia:
            farmacia.telefono_Farmacia= telefono_Farmacia
        if horario_Farmacia:
            farmacia.horario_Farmacia= horario_Farmacia
        if sucursales_Farmacia:
            farmacia.sucursales_Farmacia=sucursales_Farmacia
        if img:
            farmacia.img = img

            farmacia.save()
        return Response({"exito":"Farmacia actualizada"}, status=status.HTTP_200_OK)


class CrearEspecialidadesView(ListCreateAPIView):
    #permission_classes = [permisos]
    queryset= Especialidades.objects.all()
    serializer_class= EspecialidadesSerializer

class EspecialidadesDetailView(ListAPIView):
    
    queryset= Especialidades.objects.all()
    serializer_class= EspecialidadesSerializer

class EspecialidadEliminarView(RetrieveDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Especialidades.objects.all()
    serializer_class = EspecialidadesSerializer

class EditarEspecialidadView(APIView):
    #permission_classes = [IsAuthenticated]
    def patch(self, request, id):
        nombre_Especialidad = request.data.get("nombre_Especialidad")
        centro_id = request.data.get("centro")
        descripcion_Especialidad = request.data.get("descripcion_Especialidad")
        ubicacion_Especialidad = request.data.get("ubicacion_Especialidad")
        
        precio = request.data.get("precio")

        try:
            especialidad = Especialidades.objects.get(id=id)
        except Especialidades.DoesNotExist:
            return Response({"error": "Especialidad no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        if nombre_Especialidad:
            especialidad.nombre_Especialidad = nombre_Especialidad
        if descripcion_Especialidad:
            especialidad.descripcion_Especialidad = descripcion_Especialidad
        if ubicacion_Especialidad:
            especialidad.ubicacion_Especialidad = ubicacion_Especialidad
        
        if precio:
            especialidad.precio = precio
        if centro_id:
            try:
                centro_instancia = Centro.objects.get(id=centro_id)
                especialidad.centro = centro_instancia
            except Centro.DoesNotExist:
                return Response({"error": "Centro no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        especialidad.save()

        return Response({"exito": "Especialidad actualizada"}, status=status.HTTP_200_OK)


class CentroListView(ListCreateAPIView):
    queryset = Centro.objects.all()
    serializer_class = CentroSerializer

class CentroDetailView(ListAPIView):
    queryset=Centro.objects.all()
    serializer_class=CentroSerializer

class CentroEliminarView(RetrieveDestroyAPIView):
    lookup_field = "id"
    queryset =Centro.objects.all()
    serializer_class =CentroSerializer

class EditarCentroView(APIView):
    def patch(self, request, id):
        nombre_Centro = request.data.get("nombre_Centro")

        try:
            centro = Centro.objects.get(id=id)
        except Centro.DoesNotExist:
            return Response({"error": "Centro no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        if nombre_Centro:
            centro.nombre_Centro = nombre_Centro
            centro.save()
            return Response({"exito": "Centro actualizado"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "No se proporcionaron dato"}, status=status.HTTP_400_BAD_REQUEST)

class CrearProvinciasView (ListCreateAPIView):
    #permission_classes = [permisos]
    queryset=Provincias.objects.all()
    serializer_class= ProvinciasSerializer

class ProvinciasDetailView(ListAPIView):
    #permission_classes = [permisos]
    queryset= Provincias.objects.all()
    serializer_class= ProvinciasSerializer

class ProvinciaEliminarView(RetrieveDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Provincias.objects.all()
    serializer_class = ProvinciasSerializer

class EditarProvinciaView(APIView):
    def patch(self, request, id):
        nombre_Provincia= request.data.get("nombre_Provincia")

        provincia= Provincias.objects.get(id=id)

        if nombre_Provincia:
            provincia.nombre_Provincia= nombre_Provincia

            provincia.save()

        return Response({"exito":"Provincia actualizada"}, status=status.HTTP_200_OK)


class CrearClinicasView(ListCreateAPIView):
    # permission_classes = [permisos]
    queryset= Clinicas.objects.all()
    serializer_class= ClinicasSerializer

class ClinicasDetailView(ListAPIView):
    
    queryset= Clinicas.objects.all()
    serializer_class= ClinicasSerializer

class ClinicaEliminarView(RetrieveDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = Clinicas.objects.all()
    serializer_class = ClinicasSerializer

class EditarClinicaView(APIView):
    #permission_classes = [IsAuthenticated]
    def patch(self, request, id):
        nombre_Clinica= request.data.get("nombre_Clinica")
        direccion_Clinica= request.data.get("direccion_Clinica")
        horario= request.data.get("horario")
        telefono_Clinica= request.data.get("telefono_Clinica")
        nombre_Provincia= request.data.get("Provincias")

        clinica= Clinicas.objects.get(id=id)

        if nombre_Clinica:
            clinica.nombre_Clinica= nombre_Clinica
        if direccion_Clinica:
            clinica.direccion_Clinica= direccion_Clinica
        if horario:
            clinica.horario= horario
        if telefono_Clinica:
            clinica.telefono_Clinica= telefono_Clinica
        
        if nombre_Provincia:
            try:
                provincia_instancia = Provincias.objects.get(id=nombre_Provincia)
                clinica.Provincias = provincia_instancia
            except Provincias.DoesNotExist:
                return Response({"error": "Provincia no encontrada"}, status=status.HTTP_400_BAD_REQUEST)

        clinica.save()
        return Response({"exito":"Clinica actualizada"}, status=status.HTTP_200_OK)


class CrearContactoView(ListCreateAPIView):
    queryset= Contacto.objects.all()
    serializer_class= ContactoSerializer

class ContactoDetailView(ListAPIView):
    lookup_field = "id"
    queryset= Contacto.objects.all()
    serializer_class= ContactoSerializer


class FarmaciasPorDirectorId(APIView):
    def get(self,request,id):
        try:
            farmacias = Farmacias.objects.filter(director_Farmacia=id)
            serializer = FarmaciasSerializer(farmacias,many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Farmacias.DoesNotExist:
            return Response({"error": "No se encontraron farmacias para este director"}, status=status.HTTP_404_NOT_FOUND)