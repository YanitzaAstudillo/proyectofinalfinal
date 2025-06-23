
import { Link, useNavigate } from 'react-router-dom';
import '../styles/mision.css';


function Nous() {
    const navi= useNavigate()

    return(
        <div className='body3'>

          <Link to="/PagInicio" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea'>INICIO</Link>
          <Link to="/Login" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_lineaa'>NOSOTROS</Link>
          <Link to="/Contac" style={{ color: 'white', textDecoration: 'none' }} className='enlace_sin_linea1'>CONTACTO</Link>

            <div className='container'>
                <h4>QUIENES SOMOS</h4>
                <br />
                <p>
                 Nuestro Sistema médico informativo nace en Mayo de 2025 como proyecto estudiantil y planteándonos soluciones a una problematica actual: acortar los tiempos de espera de atención al paciente,
                 esto es llevando alternativas médicas de calidad, rápida, segura y accesible, mediante una plataforma que agrupe los mejores centros asistenciales en cuanto a precio y óptima calidad,
                 información actualizada en cuanto a ubicación, precios y horarios.
                 Nuesta Alternativa va más allá de la información, ya que integra servicios de publicidad y competitividad de negocios.
                 <br />
                 <br />
                  Visión
                 <br />
                 Convertirnos en la principal plataforma de información médica en Costa Rica, en busca de brindar soluciones médicas a la población.
                 <br />
                 <br />
                    
                </p>
            </div>
        </div>
    )
}
export default Nous;