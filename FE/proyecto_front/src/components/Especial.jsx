
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

    return (
        <>
            <div className='body4'>
                <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
                <Link to="/Login" className='enlace_sin_lineaa'>NOSOTROS</Link>
                <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>

                
                <div className="roww">
                    {listaEspecialidades.map((especialidad) => (
                        <div className="col-sm-6 mb-4" key={especialidad.id}>
                            <div className="cardd">
                                <div className="card-body">
                                    <h5 className="card-title">{especialidad.nombre_Especialidad}</h5>
                                    <p className="card-text"><strong>Médico/Clínica:</strong> {especialidad.nombre_Medico_Clinica}</p>
                                    <p className="card-text"><strong>Descripción:</strong> {especialidad.descripcion_Especialidad}</p>
                                    <p className="card-text"><strong>Ubicación:</strong> {especialidad.ubicacion_Especialidad}</p>
                                    <p className="card-text"><strong>Teléfono:</strong> {especialidad.telefono_Especialidad}</p>
                                    <p className="card-text"><strong>Precio:</strong>C {especialidad.precio}</p>
                                    <a href="#" className="btn btn-outline-dark">Contactar</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Especial;
