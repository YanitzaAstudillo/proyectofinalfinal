
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamadosClinic from '../services/llamadosClinic.jsx';
import anivImg from '../assets/aniv.jpg';
import metroImg from '../assets/metro.png';
import '../styles/clinicas.css';


const provincias = [
    "San José",
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
  <div className="body45">
    <>
      <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
      <Link to="/" className='enlace_sin_lineaa'>NOSOTROS</Link>
      <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
    </>
  <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start', justifyContent: 'left'}}>

    <div style={{ maxWidth: '650px', flexShrink: 0 }}>
      <div className="dropdown-menuu">
        <select
          value={clinicasPorProvincia}
          onChange={(e) => setClinicasPorProvincia(e.target.value)}
          style={{ width: '100%' }}
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
