from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Usuarios(models.Model):
    ROL_CHOICES = [
        ('admin', 'Administrador'),
        ('asociado', 'Asociado'),
        ('usuario', 'Usuario'),
    ]

    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=180)
    telefono = models.CharField(max_length=100)
    esta_asociado = models.BooleanField(default=False)
    rol = models.CharField(max_length=20, choices=ROL_CHOICES, default='usuario')

    def __str__(self):
        return self.usuario.username
    

class Farmacias (models.Model):
    nombre_Farmacia= models.CharField(max_length=100)
    direccion_Farmacia= models.CharField(max_length=180)
    telefono_Farmacia= models.CharField(max_length=100)
    horario_Farmacia = models.TextField()
    sucursales_Farmacia = models.CharField(max_length=180, null=True, blank=True)
    director_Farmacia = models.ForeignKey(User,on_delete=models.CASCADE)
    img = models.URLField(max_length=500, null=True, blank=True)

    def __str__(self):
        return self.nombre_Farmacia
    

class Centro(models.Model):
    nombre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.nombre
    

class Especialidades (models.Model):
    nombre_Especialidad= models.CharField(max_length=100)
    centro = models.ForeignKey(Centro, on_delete=models.CASCADE, null=True, blank=True)

    descripcion_Especialidad= models.CharField(max_length=180)
    ubicacion_Especialidad= models.CharField(max_length=180)
    
    precio= models.IntegerField(blank=False)
    def __str__(self):
        return self.nombre_Especialidad

class Provincias (models.Model):
    PROVINCIAS_SELECT = [
        ("alajuela", "ALAJUELA"),
        ("heredia", "HEREDIA"),
        ("cartago", "CARTAGO"),
        ("san josé", "SAN JOSÉ"),
        ("limón", "LIMÓN"),
        ("puntarenas", "PUNTARENAS"),
        ("guanacaste", "GUANACASTE"),
    ]
    nombre_Provincia = models.CharField(max_length=20, choices=PROVINCIAS_SELECT)
    def __str__(self):
        return self.nombre_Provincia

class Clinicas (models.Model):
    nombre_Clinica= models.CharField(max_length=100)
    direccion_Clinica= models.CharField(max_length=180)
    horario= models.TimeField()
    telefono_Clinica= models.CharField(max_length=100)
    Provincias= models.ForeignKey(Provincias, on_delete=models.CASCADE, related_name="Clinicas")
    def __str__(self):
        return self.nombre_Clinica

class Productos(models.Model):
    paquete=models.CharField(max_length=100)
    descripcion= models.CharField(max_length=280)
    precio_Paquete= models.IntegerField(blank=False)
    def __str__(self):
        return self.paquete