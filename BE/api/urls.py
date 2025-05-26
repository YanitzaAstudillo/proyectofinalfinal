
from django.urls import path
from .views import CrearUsuarioView,CrearVerFarmacia, CrearEspecialidadesView, CrearProvinciasView
from .views import CrearClinicasView, CrearContactoView
from .views import UsuariosDetailView, FarmaciasDetailView, EspecialidadesDetailView, ProvinciasDetailView
from .views import ClinicasDetailView, ContactoDetailView, ValidarUsuarioView

urlpatterns= [
    path('Usuarios/', CrearUsuarioView.as_view(), name='Usuarios-listar-crear'),
    path('validarUsuario/',ValidarUsuarioView.as_view()),
    path('farmacias/',CrearVerFarmacia.as_view()),
    path('Especialidades/', CrearEspecialidadesView.as_view()),
    path('Provincias/', CrearProvinciasView.as_view()),
    path('Clinicas/', CrearClinicasView.as_view()),
    path('Contacto/', CrearContactoView.as_view()),
    path('Usuarios/', UsuariosDetailView.as_view()),
    path('Farmacias/',FarmaciasDetailView.as_view),
    path('Especialidades/', EspecialidadesDetailView.as_view()),
    path('Provincias/', ProvinciasDetailView.as_view()),
    path('Clinicas/', ClinicasDetailView.as_view()),
    path('Contacto/', ContactoDetailView.as_view())
]