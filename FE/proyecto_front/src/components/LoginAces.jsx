
import React, { useState } from "react";
import '../styles/login.css';
import llamadosLogin from '../services/llamadosLogin'
import Swal from "sweetalert2";

function LoginAces() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const datoss = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const inicioSesion = async (e) => {
            e.preventDefault();
            const response = await llamadosLogin.postUsuarios(formData.username,formData.password);

            console.log(response);
            
            if (response.exito) {
                Swal.fire("Éxito", "Sesión iniciada correctamente", "success");
            } else {
                Swal.fire("Error",  "Credenciales inválidas", "error");
            }

        }


    return (
        <div className="fondo2">
            <img src="src/assets/portada2.jpg" alt="portada" width="1400" height="750" />

            <div className="form-container2">
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
