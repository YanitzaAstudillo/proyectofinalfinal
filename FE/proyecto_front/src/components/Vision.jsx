
import { Link, useNavigate } from 'react-router-dom';
import '../styles/mision.css';


function Vision() {
    const navi= useNavigate()

    return(
        <div className='body3'>

          <Link to="/PagInicio" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea'>INICIO</Link>
          <Link to="/Nosotros" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_lineaa'>NOSOTROS</Link>
          <Link to="/Contac" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea1'>CONTACTO</Link>

            <div className='container'>
                <h4>MISIÓN Y VISIÓN</h4>
                <br />
                <p>
                    Nuestra misión es empoderar a las personas mediante el acceso oportuno y confiable a información médica.
                    Nuestro objetivo es facilitar la búsqueda de servicios y soluciones de salud a través de una plataforma informativa eficiente y accesible. Nos enfocamos en brindar datos relevantes y actualizados a los usuarios que consultan nuestro portal, contribuyendo así a una mejor toma de decisiones en materia de salud.
                    <br />
                    <br />
                    Visión
                    <br />
                    Convertirnos en la principal plataforma de información médica en Costa Rica, iniciando con una prueba piloto en el Gran Área Metropolitana GAM y proyectando nuestra expansión hacia todo el territorio nacional. Aspiramos a establecer alianzas estratégicas con el sector empresarial y de salud para consolidar una red de afiliados sólida y en crecimiento, que permita llevar información médica confiable a cada rincón del país.
                    <br />
                    <br />
                    
                </p>
            </div>

        </div>
    )
}
export default Vision