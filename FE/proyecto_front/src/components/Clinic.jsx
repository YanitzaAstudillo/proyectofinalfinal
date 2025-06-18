
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import llamadosClinic from '../services/llamadosClinic.jsx';
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
  <div className='body45'>
    <>
        <Link to="/PagInicio"  className='enlace_sin_linea'>INICIO</Link>
        <Link to="/"  className='enlace_sin_lineaa'>NOSOTROS</Link>
        <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
    </>
    <div className="dropdown-menuu p-4 text-body-secondary" style={{ maxWidth: '350px'}}>
      <select
        value={clinicasPorProvincia}
        onChange={(e) => setClinicasPorProvincia(e.target.value) }
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
      <p>
        Seleccione su clinica más cercana
      </p>
    </div>

    {traerClinicas.map((clin) => (
      <div
        key={clin.id}
        className="dropdown-menuu p-4 text-body-secondary"
        style={{ maxWidth: '500px', marginTop: '20px'}}
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
);
}

export default Clinic;
