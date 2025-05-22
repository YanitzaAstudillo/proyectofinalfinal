
import React from "react";
import '../styles/inicio.css';

function RegisterAces() {
    
    return(
        <div className="fondo2">
            <img src="portada2" alt="portada2" srcset="src/assets/portada2.jpg" width={"1528"} height={738}/>
            <div className="form-container">
            <p className="title">Regístrese</p>
         <form className="form">
          <div className="input-group">
            <label htmlFor="username">Nombre</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">Apellido</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="username">Email</label>
            <input type="text" name="username" id="username" placeholder />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder />
          </div>
            <br />
            <button className="sign">Enviar</button>
         </form> 
        </div>
        
        </div>

    )

}

export default RegisterAces