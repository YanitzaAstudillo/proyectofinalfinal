
import '../styles/adminEspe.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosEspecial from '../services/llamadosEspecial';
import Swal from 'sweetalert2';


function AdminEspe() {
        const[especialidades, setEspecialidades]=useState([]);
        const[nombre_EspecialidadEd, setNombre_EspecialidadEd]=useState("");
        const[nombre_Medico_ClinicaEd, setNombre_Medico_ClinicaEd]=useState("");
        const[descripcion_EspecialidadEd, setDescripcion_EspecialidadEd]= useState("");
        const[ubicacion_EspecialidadEd, setUbicacion_EspecialidadEd]= useState("");
        const[telefono_EspecialidadEd, setTelefono_EspecialidadEd]= useState("");
        const[precioEd, setPrecioEd]= useState("");
        const [idEdita, setIdEdita]= useState(null)
        
        useEffect(() => {
            async function cargarEspecialidades() {
                const dataa = await llamadosEspecial.getEspecialidades();
                    setEspecialidades(dataa);
                }
                cargarEspecialidades();
        }, []);
        
            function inicioEdit(especialidad) {
                setIdEdita(especialidad.id);
                setNombre_EspecialidadEd(especialidad.nombre_Especialidad);
                setNombre_Medico_ClinicaEd(especialidad.nombre_Medico_Clinica);
                setDescripcion_EspecialidadEd(especialidad.descripcion_Especialidad);
                setUbicacion_EspecialidadEd(especialidad.ubicacion_Especialidad);
                setTelefono_EspecialidadEd(especialidad.telefono_Especialidad);
                setPrecioEd(especialidad.precio);
            }
            function edicionn(id) {
                if(!nombre_EspecialidadEd || !nombre_Medico_ClinicaEd || !descripcion_EspecialidadEd || !ubicacion_EspecialidadEd || !telefono_EspecialidadEd || !precioEd) {
                    Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
                 return;
                }
                   
                llamadosEspecial.updateEspecialidades(nombre_EspecialidadEd, nombre_Medico_ClinicaEd, descripcion_EspecialidadEd, ubicacion_EspecialidadEd,telefono_EspecialidadEd,precioEd, id)
                .then(() => {
                    Swal.fire('Especialidad actualizada', 'La actualización fue exitosa!', 'success');
                                
                setEspecialidades(prev =>
                    prev.map(especialidad =>
                    especialidad.id === id
                    ? { ...especialidad, nombre_Especialidad:setNombre_EspecialidadEd, nombre_Medico_Clinica: nombre_Medico_ClinicaEd,descripcion_Especialidad: descripcion_EspecialidadEd,ubicacion_Especialidad:ubicacion_EspecialidadEd,telefono_Especialidad:telefono_EspecialidadEd,precio:precioEd}
                    : especialidad
                    )
                );
                                
                setNombre_EspecialidadEd("");
                setNombre_Medico_ClinicaEd("");
                setDescripcion_EspecialidadEd("");
                setUbicacion_EspecialidadEd("");
                setTelefono_EspecialidadEd("");
                setPrecioEd("");
                setIdEdita(null);
                })
                  .catch(() => {
                    Swal.fire('Error', 'No se pudo actualizar', 'error');
                   });

            }

            function eliii(id) {
                async function eli(id) {
                    const avisa= window.confirm ("¿Está seguro de eliminar?");
                    if (!avisa) return;

                    const eliminacion= await llamadosEspecial.deleteEspecialidades(id);
                    if (eliminacion) {
                         setEspecialidades(prev => prev.filter(especialidades => especialidades.id !== id));
                         Swal.fire("especialidad eliminada", "", "success");
                        } else {
                         Swal.fire("Error al eliminar", "", "error");
                        }
                }
                eli(id);
            }
            
        return(
            <div>
                <div className="container9">
                    <p className="title">Panel de Control</p>
                    <br /><br />
                <div>
                    <Link to={"/Admin"}><button id="boton91">ADMIN USUARIOS</button></Link>
                    <Link to={"/AdminFarm"}><button id="boton18">ADMIN FARMACIAS</button></Link>
                    <Link to={"/"}><button id="boton11">ADMIN CLINICAS</button></Link>
                    <Link to={"/"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                </div>
                </div>
                <div className='dentroo'>
                    {especialidades.map((especialidad) => (
                    <ul key={especialidad.id}>
                     <br />
                     <strong>Nombre Farmacia:</strong> {especialidad.nombre_Especialidad} <br />
                     <strong>Nombre Clinica:</strong> {especialidad.nombre_Medico_Clinica} <br />
                     <strong>Descripcion:</strong> {especialidad.descripcion_Especialidad} <br />
                     <strong>Ubicacion:</strong> {especialidad.ubicacion_Especialidad} <br />
                     <strong>Teléfono:</strong> {especialidad.telefono_Especialidad} <br />
                     <strong>Precio:</strong> {especialidad.precio} <br />

                     {idEdita === especialidad.id && (
                <>
                    <input id="redo" value={nombre_EspecialidadEd} onChange={(e) => setNombre_EspecialidadEd(e.target.value)} type="text"/>{" "} Nombre<br />
                    <input id="redo" value={nombre_Medico_ClinicaEd} onChange={(e) => setNombre_Medico_ClinicaEd(e.target.value)} type="text" />{" "} Clinica o médico<br />
                    <input id="redo" value={descripcion_EspecialidadEd} onChange={(e) => setDescripcion_EspecialidadEd(e.target.value)} type="text" />{" "} Descripcion<br />
                    <input id="redo" value={ubicacion_EspecialidadEd} onChange={(e) => setUbicacion_EspecialidadEd(e.target.value)} type="text" />{" "} Ubicacion<br />
                    <input id="redo" value={telefono_EspecialidadEd} onChange={(e) => setTelefono_EspecialidadEd(e.target.value)} type="text" />{" "} Teléfono<br />
                    <input id="redo" value={precioEd} onChange={(e) => setPrecioEd(e.target.value)} type="text" />{" "} Precio consulta<br />
                     <br />
                 </>
                )}

                {idEdita !== especialidad.id && (
                 <button id="boton13" onClick={() => inicioEdit(especialidad)}> Editar </button>
                 )}
                <button id="boton13" onClick={() => edicionn(especialidad.id)}>Confirmar edición</button> <br />
                <button id="boton14" onClick={() => eliii(especialidad.id)}>Eliminar</button> <br />
                </ul>
            ))}
        </div>
      </div>
        )
}
export default AdminEspe;