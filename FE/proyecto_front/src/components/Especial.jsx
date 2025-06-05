
import  { useState, useEffect } from "react";
import '../styles/especialidades.css';
import { Link } from 'react-router-dom';
import llamadosEspecial from "../services/llamadosEspecial";


function Especial() {
    const [listaEspecialidades, setListaEspecialidades]= useState([])
    const [nombre_Especialidad, setNombre_Especialidad]=useState("")
    const [nombre_Medico_Clinica, setNombre_Medico_Clinica]= useState("")
    const [descripcion_Especialidad, setDescripcion_Especialidad]= useState("")
    const [ubicacion_Especialidad, setUbicacion_Especialidad]= useState("")
    const [telefono_Especialidad, setTelefono_Especialidad]= useState("")
    const [precio, setPrecio]= useState(0)

        useEffect(()=>{
            const traerEspecialidades = async()=>{
                const dat = await llamadosEspecial.getEspecialidades()
                console.log(dat);

    
                setListaEspecialidades(dat);
            
            }
            traerEspecialidades()
            
        },[])
            function nombre(evento) {
                setNombre_Especialidad(evento.target.value)
            }

            function nombreClinica(evento) {
                setNombre_Medico_Clinica(evento.target.value)
            }

            function descripcion(evento) {
                setDescripcion_Especialidad(evento.target.value)
            }

            function ubicacion(evento) {
                setUbicacion_Especialidad (evento.target.value)
            }

            function telefono(evento) {
                setTelefono_Especialidad (evento.target.value)
            }

            function preciooo(evento) {
                setPrecio (evento.target.value)
            }


    return (
        <div className='body4'>
            <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
            <Link to="/Login" className='enlace_sin_lineaa'>NOSOTROS</Link>
            <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>


        <>

            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Medicina General</h5>
                    <p className="card-text">Clinica Asembis</p>

                    <label htmlFor="">Nombre Clinica</label>
                    <input id="ree" onChange={nombre} value={nombre_Especialidad} type="text" />

                    <label htmlFor="">Nombre Clinica</label>
                    <input id="ree" onChange={nombreClinica} value={nombre_Medico_Clinica} type="text" />

                    <label htmlFor="">Descripcion</label>
                    <input id="ree" onChange={descripcion} value={descripcion_Especialidad} type="text" />

                    <label htmlFor="">Ubicacion</label>
                    <input id="ree" onChange={ubicacion} value={ubicacion_Especialidad} type="text" />

                    <label htmlFor="">Telefono</label>
                    <input id="ree" onChange={telefono} value={telefono_Especialidad} type="text" />

                    <label htmlFor="">Precio consulta</label>
                    <input id="ree" onChange={preciooo} value={precio} type="text" />

                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
             </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            </div>

        </>
        
        <div>
            <ul>
           {listaEspecialidades.map ((especialidad)=>(
                <li key={especialidad.id}>{especialidad.nombre_Especialidad}</li>
            ))}
            </ul>
        </div>

        </div>
    )
}
export default Especial