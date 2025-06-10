
from django.urls import path
from .views import CrearUsuarioView, UsuariosDetailView,ValidarUsuarioView,UsuarioEliminarView,EditarUsuarioView

from .views import CrearVerFarmacia, FarmaciasDetailView, FarmaciaEliminarView, EditarFarmaciaView
from .views import CrearEspecialidadesView, EspecialidadesDetailView,EspecialidadEliminarView,EditarEspecialidadView
from .views import CrearProvinciasView, ProvinciasDetailView
from .views import CrearClinicasView,ClinicasDetailView,ClinicaEliminarView,EditarClinicaView
from .views import CrearContactoView,ContactoDetailView


urlpatterns= [
    path('Usuarios/', CrearUsuarioView.as_view(), name='Usuarios-listar-crear'),
    path('validarUsuario/',ValidarUsuarioView.as_view()),
    path('todos-usuarios/', UsuariosDetailView.as_view()),
    path('todos-usuarios/<int:id>/', UsuarioEliminarView.as_view(), name="eliminar_usuario"),
    path('editar-usuarios/<int:id>/', EditarUsuarioView.as_view(), name="usuario-actualizar"),

    path('farmacias/',CrearVerFarmacia.as_view()),
    path('farmacias-get/',FarmaciasDetailView.as_view()),
    path('todas-farmacias/<int:id>/', FarmaciaEliminarView.as_view()),
    path('editar-farmacias/<int:id>/', EditarFarmaciaView.as_view()),

    path('especialidades/', CrearEspecialidadesView.as_view()),
    path('especialidades-get/', EspecialidadesDetailView.as_view()),
    path('todas-especialidades/<int:id>/',EspecialidadEliminarView.as_view()),
    path('editar-especialidad/<int:id>/', EditarEspecialidadView.as_view()),

    path('provincias/', CrearProvinciasView.as_view()),
    path('todas-provincias/', ProvinciasDetailView.as_view()),

    path('clinicas/', CrearClinicasView.as_view()),
    path('clinicas-get/', ClinicasDetailView.as_view()),
    path('todas-clinicas/', ClinicaEliminarView.as_view()),
    path('editar-clinica/<int:id>/', EditarClinicaView.as_view()),

    path('Contacto/', CrearContactoView.as_view()),
    path('todos-contacto/', ContactoDetailView.as_view())
    
]