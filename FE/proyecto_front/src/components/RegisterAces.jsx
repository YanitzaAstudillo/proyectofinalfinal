

import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css';
import Swal from "sweetalert2";
import llamados from "../services/llamados";


function RegisterAces() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        direccion: '',
        telefono: '',
        esta_afiliado: false
    });


    const dato = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const enviarDato = async (e) => {
        e.preventDefault();
        try {
        const respuesta = await llamados.postUsuarios(formData.username,formData.password,formData.first_name,formData.last_name,formData.email,formData.direccion,formData.telefono,formData.esta_afiliado);
            if (respuesta.exito) {
            Swal.fire('Usuario registrado', '¡Registrado con éxito!', 'success');
            setFormData({
             username: '',
             password: '',
             first_name: '',
             last_name: '',
             email: '',
             direccion: '',
             telefono: '',
             esta_afiliado: false
             });
            } else {
                Swal.fire("Error", "No se pudo registrar el usuario", "error");
            }
            } catch (error) {
                console.error("Error en el envío:", error);
                Swal.fire("Error", "Error inesperado del servidor", "error");
            }
        
    };

    return (
        <div className="fondo2">
            <img src="../src/assets/portada2.jpg" alt="portada" width="1370" height="760" />
            <Link to="/PagInicio" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea'>INICIO</Link>
            <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_lineaa'>NOSOTROS</Link>
            <Link to="/Contac" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea1'>CONTACTO</Link>

            <div className="form-container">
                <p className="title">Regístrese</p>
                <form className="form" onSubmit={enviarDato}>
                
                    <div className="input-group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input type="text" name="username" value={formData.username} onChange={dato} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" value={formData.password} onChange={dato} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="first_name">Nombre</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={dato} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="last_name">Apellido</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={dato} />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" name="email" value={formData.email} onChange={dato} />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" name="direccion" value={formData.direccion} onChange={dato} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={dato} />
                    </div>
               
                    
                    <button className="sign" type="submit" href="/Login" >Enviar</button>
                </form>
                
            </div>
        </div>
    );
}

export default RegisterAces;
