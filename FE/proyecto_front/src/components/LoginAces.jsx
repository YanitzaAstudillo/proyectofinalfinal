
import React, { useState } from "react";
import '../styles/inicio.css';
import llamados from '../services/llamados'
import Swal from "sweetalert2";

function LoginAces() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const datoss = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const inicioSesion = async (e) => {
        e.preventDefault();
        try {
            const respuesta = await loginUsuario(formData.username, formData.password);
            if (respuesta.success) {
                        Swal.fire('Usuario registrado', '¡Registrado con éxito!', 'success');

            // Opcional: guardar en localStorage
            localStorage.setItem("usuario", formData.username);

            // Redirigir o actualizar estado global, si usas React Router o contexto
            // navigate("/dashboard");
              } else {
                Swal.fire("Error", "No se pudo registrar el usuario", "error");
               }
              } catch (error) {
              Swal.fire("Error", "Error inesperado del servidor", "error");
              }
    };

    return (
        <div className="fondo2">
            <img src="src/assets/portada2.jpg" alt="portada" width="1528" height="738" />
            <div className="form-container">
                <p className="title">Iniciar Sesión</p>
                <form className="form" onSubmit={inicioSesion}>
                    <div className="input-group">
                        <label htmlFor="username">Nombre de Usuario</label>
                        <input type="text" name="username" value={formData.username} onChange={datoss} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" value={formData.password} onChange={datoss} required />
                    </div>
                    <br />
                    <button className="sign" type="submit">Ingresar</button>
                </form>
                
            </div>
        </div>
    );
}

export default LoginAces;
