
import { Link, useNavigate } from 'react-router-dom';
import '../styles/inicio.css';



function Inicio() {
    const navigate = useNavigate()
    
    return (
        <div className='booody'>
          
          <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
          <Link to="/Nosotros" className='enlace_sin_lineaa'>NOSOTROS</Link>
          <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
          
          <div className='card-botones'>
            <div className='botones'>
             <button id="boton1" onClick={()=>{navigate("/Farmacias")}} size="lg">Farmacias</button>
             <button id="boton2" onClick={()=>{navigate("/Clinicas")}} size="lg">Clinicas</button>
             <button id="boton3" onClick={()=>{navigate("/Especialidades")}} size="lg">Especialidades</button>
             <button id="boton4" onClick={()=>{navigate("/SociosPag")}} size="lg">Afiliado</button>
             <button id="boton5" onClick={()=>{navigate("/Mision")}} size="lg">Misión y Visión</button>
             <button id="boton6" onClick={()=>{navigate("/Contac")}} size="lg">Contacto</button>
            </div>
          </div>
            <img src="portada2" alt="portada2" srcSet="../src/assets/portada2.jpg" width={"1370"} height={738}/>
            <div className="login-area">
            <p className='reg'>¿Deseas registrarte?<Link to="/Register" >Registrese aquí</Link> </p>
            <div className='tituloLogin'>
             <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }} >LOGIN</Link>
             <br />
            </div>
             <a className="nav-link" href="/Register">Deseas afiliarte?</a>
            </div>
            
  
        </div>
    )
}

export default Inicio;