
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamadosClinic from '../services/llamadosClinic.jsx';
import anivImg from '../assets/aniv.jpg';
import metroImg from '../assets/metro.png';
import '../styles/clinicas.css';

const provincias = [
    "San Jose",
    "Alajuela",
    "Cartago",
    "Heredia",
    "Guanacaste",
    "Puntarenas",
    "Limón"
];

function Clinic() {
    const [clinicasPorProvincia, setClinicasPorProvincia] = useState("");
    const [traerClinicas, setTraerClinicas] = useState([])

    useEffect(() => {
        if (!clinicasPorProvincia) return;

        async function fetchClinicas() {
            try {

             
              
                const clinicas = await llamadosClinic.getClinicas();
                const clinicasFiltradas = clinicas.filter(
                    (clinica) => clinica.nombre_Provincia === clinicasPorProvincia
                );
                setTraerClinicas(clinicasFiltradas);
                console.log(clinicas);
                console.log(clinicasFiltradas);

            } catch (error) {
                console.error("Error cargando clínicas:", error);
            }
        }

        fetchClinicas();
    }, [clinicasPorProvincia]);


     
    

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

  <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', justifyContent: 'left'}}>

    <div style={{ maxWidth: '650px', flexShrink: 0 }}>
      <div className="dropdown-menuu">
        <select
          value={clinicasPorProvincia}
          onChange={(e) => setClinicasPorProvincia(e.target.value)}
          style={{ width: '100%' }}
          className={clinicasPorProvincia != '' ? 'input-select-provincia' : 'input-select-provincia-noselect'}
        >
          <option value="" disabled>Seleccione una provincia para filtrar</option>
          <option value="alajuela">Alajuela</option>
          <option value="limón">Limón</option>
          <option value="cartago">Cartago</option>
          <option value="guanacaste">Guanacaste</option>
          <option value="san josé">San José</option>
          <option value="puntarenas">Puntarenas</option>
          <option value="heredia">Heredia</option>
        </select>
        <p>Seleccione su clínica más cercana</p>
      </div>

      {traerClinicas.map((clin) => (
        <div
          key={clin.id}
          className="dropdown-menuu"
          style={{ marginTop: '20px', maxWidth: '100%' }}
        >
          <p>
            <strong>Nombre Clínica:</strong> {clin.nombre_Clinica} <br />
            <strong>Dirección:</strong> {clin.direccion_Clinica} <br />
            <strong>Horario:</strong> {clin.horario} <br />
            <strong>Teléfono:</strong> {clin.telefono_Clinica} <br />
            <strong>Provincia:</strong> {clin.nombre_Provincia} <br />
          </p>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '320px', flexShrink: 0 }}>
      <img
        src={anivImg}
        alt="Decoracion Aniv"
        style={{ width: '100%', borderRadius: '10px', opacity: 0.6 }}
      />
      <img
        src={metroImg}
        alt="Decoracion Metro"
        style={{ width: '100%', borderRadius: '10px', opacity: 0.6 }}
      />
    </div>

  </div>
</div>

);
}

export default Clinic;
