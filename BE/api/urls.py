
from django.urls import path
from .views import CrearUsuarioView, UsuariosDetailView,ValidarUsuarioView,UsuarioEliminarView,EditarUsuarioView
from .views import CrearVerFarmacia, FarmaciasDetailView, FarmaciaEliminarView, EditarFarmaciaView
from .views import CrearEspecialidadesView, EspecialidadesDetailView,EspecialidadEliminarView,EditarEspecialidadView
from .views import CrearProvinciasView, ProvinciasDetailView,ProvinciaEliminarView,EditarProvinciaView
from .views import CrearClinicasView,ClinicasDetailView,ClinicaEliminarView,EditarClinicaView
from .views import CrearProductosView,ProductosDetailView,ProductoEliminarView,EditarProductoView
from .views import FarmaciasPorDirectorId,CentroListView,CentroDetailView,CentroEliminarView,EditarCentroView


urlpatterns= [
    path('Usuarios/', CrearUsuarioView.as_view(), name='Usuarios-listar-crear'),
    path('validarUsuario/',ValidarUsuarioView.as_view()),
    path('todos-usuarios/', UsuariosDetailView.as_view()),
    path('todos-usuarios/<int:id>/', UsuarioEliminarView.as_view(), name="eliminar_usuario"),
    path('editar-usuarios/<int:id>/', EditarUsuarioView.as_view(), name="usuario-actualizar"),

    path('farmacias/',CrearVerFarmacia.as_view()),
    path('farmacias_director/<int:id>/', FarmaciasPorDirectorId.as_view(), name='farmacias_director'),
    path('farmacias-get/',FarmaciasDetailView.as_view()),
    path('todas-farmacias/<int:id>/', FarmaciaEliminarView.as_view()),
    path('editar-farmacias/<int:id>/', EditarFarmaciaView.as_view()),

    path('especialidades/', CrearEspecialidadesView.as_view()),
    path('especialidades-get/',EspecialidadesDetailView.as_view()),
    path('todas-especialidades/<int:id>/',EspecialidadEliminarView.as_view()),
    path('editar-especialidad/<int:id>/', EditarEspecialidadView.as_view()),

    path('centros/', CentroListView.as_view()),
    path('centros-get/',CentroDetailView.as_view()),
    path('todos-centros/<int:id>/',CentroEliminarView.as_view()),
    path('editar-centro/<int:id>/', EditarCentroView.as_view()),

    path('provincias/', CrearProvinciasView.as_view()),
    path('provincias-get/', ProvinciasDetailView.as_view()),
    path('todas-provincias/<int:id>/',ProvinciaEliminarView.as_view()),
    path('editar-provincia/<int:id>/', EditarProvinciaView.as_view()),
    
    path('clinicas/', CrearClinicasView.as_view()),
    path('clinicas-get/', ClinicasDetailView.as_view()),
    path('todas-clinicas/<int:id>/', ClinicaEliminarView.as_view()),
    path('editar-clinica/<int:id>/', EditarClinicaView.as_view()),

    path('productos/', CrearProductosView.as_view()),
    path('productos-get/', ProductosDetailView.as_view()),
    path('todos-productos/<int:id>/',ProductoEliminarView.as_view()),
    path('editar-productos/<int:id>/', EditarProductoView.as_view())

]