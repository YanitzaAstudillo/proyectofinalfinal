
import { Link } from 'react-router-dom';
import '../styles/mision.css';

function Vision() {
  return (
    <div className="body3">
      <nav className="nav-bar2">
        <Link to="/PagInicio" className="nav-link2">Inicio</Link>
        <Link to="/Nosotros" className="nav-link2">Nosotros</Link>
        <Link to="/Contac" className="nav-link2">Contacto</Link>
      </nav>

      <img
        src="https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg?auto=compress&cs=tinysrgb&w=700"
         alt="cirujanos operando en quirófano"
         className="header-image"
        />

      <div className="containeer">
        <div className="section">
          <img
            src="https://img.icons8.com/ios-filled/60/00bcd4/medical-doctor.png"
            alt="Misión Icono"
            className="icono"
          />
          <h2>Misión</h2>
          <p>
            Nuestra misión es empoderar a las personas mediante el acceso oportuno y confiable a información médica.
            Nuestro objetivo es facilitar la búsqueda de servicios y soluciones de salud a través de una plataforma informativa eficiente y accesible. Nos enfocamos en brindar datos relevantes y actualizados a los usuarios que consultan nuestro portal, contribuyendo así a una mejor toma de decisiones en materia de salud.
          </p>
        </div>

        <div className="section">
     <img
        src="https://img.icons8.com/ios-filled/60/00bcd4/network.png"
        alt="Visión Icono tecnológico"
        className="icono"
     />
    <h2>Visión</h2>
    <p>
        Convertirnos en la principal plataforma de información médica en Costa Rica, iniciando con una prueba piloto en el Gran Área Metropolitana GAM y proyectando nuestra expansión hacia todo el territorio nacional. Aspiramos a establecer alianzas estratégicas con el sector empresarial y de salud para consolidar una red de afiliados sólida y en crecimiento, que permita llevar información médica confiable a cada rincón del país.
    </p>
    </div>
    </div>
 </div>
  );
}

export default Vision;
