
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/inicio.css';


function Inicio() {
    const navigate = useNavigate()
    return (

        <div className='body'>

         <div className='titulo'>
             <a style={{ color: 'white', textDecoration: 'none' }}><ref to="/Inicio">INICIO</ref></a>
         </div>
          <div className='botones'>
            <button id="boton1" onClick={()=>{navigate("/Farmacias")}} size="lg">Farmacias</button>
          </div>
            <img src="portada2" alt="portada2" srcset="src/assets/portada2.jpg" width={"1300"} height={738}/>

         
        </div>
            
    )
            

}

export default Inicio