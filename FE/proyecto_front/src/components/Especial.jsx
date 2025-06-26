
import { useState, useEffect } from "react";
import '../styles/especialidades.css';
import { Link } from 'react-router-dom';
import llamadosEspecial from "../services/llamadosEspecial";


function Especial() {
    const [listaEspecialidades, setListaEspecialidades] = useState([]);

    useEffect(() => {
        const traerEspecialidades = async () => {
            const dat = await llamadosEspecial.getEspecialidades();
            console.log(dat);
            
            setListaEspecialidades(dat);
        };
        traerEspecialidades();
    }, []);

    function obtenerIcono(especialidad) {
        const nombre = especialidad.toLowerCase();

     if (nombre.includes("cardio")) return "fa-heartbeat";
     if (nombre.includes("dental") || nombre.includes("odon")) return "fa-tooth";
     if (nombre.includes("neuro")) return "fa-brain";
     if (nombre.includes("trauma") || nombre.includes("ortopedia")) return "fa-bone";
     if (nombre.includes("pediatria")) return "fa-baby";
     if (nombre.includes("gineco")) return "fa-venus";
     if (nombre.includes("urologia")) return "fa-procedures";
     if (nombre.includes("medicina")) return "fa-user-md";

        return "fa-stethoscope";
    }

    return (
        <>
            <div className='body4'>
                <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
                <Link to="/Nosotros" className='enlace_sin_lineaa'>NOSOTROS</Link>
                <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
            <div className="roww">
                {listaEspecialidades.map((especialidad) => (
                 <div className="tarjeta" key={especialidad.id}>
                 <>
                 <div className="card-bodii">
                    <i className={`fas ${obtenerIcono(especialidad.nombre_Especialidad)} icono-especialidad`}></i>
                    <h5 className="card-title">{especialidad.nombre_Especialidad}</h5>
                    <br />
                    <p className="card-text"><strong>Descripción:</strong> {especialidad.descripcion_Especialidad}</p>
                    <p className="card-text"><strong>Ubicación:</strong> {especialidad.ubicacion_Especialidad}</p>
                    <p className="card-text"><strong>Centro Asistencial:</strong> {especialidad.nombre_centro}</p>
                    <p className="card-text"><strong>Precio:</strong>C {especialidad.precio}</p>
                    <a href="https://www.waze.com/es/live-map" className="btn-waze" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt"></i> Ver en Waze
                    </a>
                 </div>
                 </>
                 </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default Especial;