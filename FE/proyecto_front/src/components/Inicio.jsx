
import { Link, useNavigate } from 'react-router-dom';
import '../styles/inicio.css';
import porta from '../assets/porta.png';



function Inicio() {
    const navigate = useNavigate()
    
    return (
        <div className='booody'style={{ backgroundImage: `url(${porta})` }}>
          
          <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
          <Link to="/Nosotros" className='enlace_sin_lineaa'>NOSOTROS</Link>
          <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
          
          <div className='card-botones'>
          
             <button  onClick={()=>{navigate("/Farmacias")}} size="lg">Farmacias</button>
             <button  onClick={()=>{navigate("/SociosPag")}} size="lg">Afiliado</button>
             <button  onClick={()=>{navigate("/Clinicas")}} size="lg">Clinicas</button>
             <button id= "azul" onClick={()=>{navigate("/Mision")}}>Misión y Visión</button>
             <button  onClick={()=>{navigate("/Especialidades")}} size="lg">Especialidades</button>
             <button  onClick={()=>{navigate("/Contac")}} size="lg">Contacto</button>
            
          </div>
            
            <div className="login-area">
            <p className='reg'>¿Deseas registrarte?<Link to="/Register" >Registrese aquí</Link> </p>
            <div className='tituloLogin'>
             <Link className='loginn' to="/Login" style={{ color: 'white', textDecoration: 'none' }} >LOGIN</Link>
             <br />
            </div>
             <a className="nav-linkk" href="/Register">Deseas afiliarte?</a>
            </div>
            
  
        </div>
    )
}

export default Inicio;