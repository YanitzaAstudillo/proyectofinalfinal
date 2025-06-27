
import { Link, useNavigate } from 'react-router-dom';
import '../styles/mision.css';

function Nous() {
  const navi = useNavigate();

  return (
    <div className="body3">
      <nav className="nav-bar2">
        <Link to="/PagInicio" className="nav-link2">Inicio</Link>
        <Link to="/Nosotros" className="nav-link2">Nosotros</Link>
        <Link to="/Contac" className="nav-link2">Contacto</Link>
      </nav>
      <img
        src="https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Cirujanos operando en quirófano"
        className="header-image"
      />
      <div className="containeer">
        <h4>¿Quiénes somos?</h4>
        <p>
          Nuestro sistema médico informativo nace en mayo de 2025 como un proyecto estudiantil, planteando soluciones a una problemática actual: acortar los tiempos de espera para atención médica.
          Nuestra propuesta ofrece alternativas médicas de calidad, rápidas, seguras y accesibles, mediante una plataforma que agrupa los mejores centros asistenciales en términos de precio y calidad,
          con información actualizada sobre ubicación, costos y horarios.

          <br /><br />
          <strong>Visión:</strong><br />
          Convertirnos en la principal plataforma de información médica en Costa Rica, brindando soluciones médicas accesibles a toda la población.
        </p>
      </div>

    </div>
  );
}

export default Nous;
