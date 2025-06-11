
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import llamadosFarma from '../services/llamadosFarma.jsx';
import Swal from 'sweetalert2';
import '../styles/adminFarm.css';


function AdminFarma() {
    const[farmacias, setFarmacias]=useState([]);
    const[nombre_FarmaciaEd, setNombre_FarmaciaEd]=useState("");
    const[direccion_FarmaciaEd, setDireccion_FarmaciaEd]= useState("");
    const[telefono_FarmaciaEd, setTelefono_FarmaciaEd]= useState("");
    const[horario_FarmaciaEd, setHorario_FarmaciaEd]=useState("");
    const [idEdit, setIdEdit] = useState(null)

        useEffect(() => {
                async function cargarFarmacias() {
                    const dat = await llamadosFarma.getFarmacias();
                    setFarmacias(dat);
                }
                cargarFarmacias();
            }, []);

            function inicioEd(farmacia) {
                setIdEdit(farmacia.id);
                setNombre_FarmaciaEd(farmacia.nombre_Farmacia);
                setDireccion_FarmaciaEd(farmacia.direccion_Farmacia);
                setTelefono_FarmaciaEd(farmacia.telefono_Farmacia);
                setHorario_FarmaciaEd(farmacia.horario_Farmacia);
            }

        function edicion(id) {
            if(!nombre_FarmaciaEd || !direccion_FarmaciaEd || !telefono_FarmaciaEd || !horario_FarmaciaEd){
                Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
                        return;
            }
            llamadosFarma.updateFarmacias(nombre_FarmaciaEd,direccion_FarmaciaEd,telefono_FarmaciaEd,horario_FarmaciaEd,id)
                .then(() => {
                            Swal.fire('Farmacia actualizada', 'La actualización fue exitosa!', 'success');
                
                            setFarmacias(prev =>
                                prev.map(farmacia =>
                                    farmacia.id === id
                                        ? { ...farmacia, nombre_Farmacia: nombre_FarmaciaEd, direccion_Farmacia: direccion_FarmaciaEd,telefono_Farmacia: telefono_FarmaciaEd,horario_Farmacia:horario_FarmaciaEd }
                                        : farmacia
                                )
                            );
                
                            setNombre_FarmaciaEd("");
                            setDireccion_FarmaciaEd("");
                            setTelefono_FarmaciaEd("");
                            setHorario_FarmaciaEd("");
                            setIdEdit(null);
                        })
                        .catch(() => {
                            Swal.fire('Error', 'No se pudo actualizar', 'error');
                        });

        }
            function borrar(id) {
                async function borra(id) {
                    const confirma= window.confirm("¿Está seguro de eliminar?");
                    if (!confirma) return;

                    const borrado= await llamadosFarma.deleteFarmacias(id);
                    if (borrado) {
                        setFarmacias(prev => prev.filter(farmacia => farmacia.id !== id));
                         Swal.fire("farmacia eliminada", "", "success");
                    } else {
                         Swal.fire("Error al eliminar", "", "error");
                    }
                }
                    borra(id);
            }
            
            function usuarioValido() {
            const admi = localStorage.getItem("submit")
            if (admi){
                return true
            }else{
                return false
            }
        }


    return(
        <div className='body5'>
            <div className="container9">
                <p className="title">Panel de Control</p>
                <br /><br />
                <div>
                    <Link to={"/Admin"}><button id="boton91">ADMIN USUARIOS</button></Link>
                    <Link to={"/AdminFarm"}><button id="boton18">ADMIN FARMACIAS</button></Link>
                    <Link to={"/AdminClinica"}><button id="boton11">ADMIN CLINICAS</button></Link>
                    <Link to={"/AdminEspecial"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                </div>
            </div>
            <div className='dentroo'>
                {farmacias.map((farmacia) => (
                <ul key={farmacia.id}>
                 <br />
                 <strong>Nombre Farmacia:</strong> {farmacia.nombre_Farmacia} <br />
                 <strong>Dirección farmacia:</strong> {farmacia.direccion_Farmacia} <br />
                 <strong>Teléfono:</strong> {farmacia.telefono_Farmacia} <br />
                 <strong>Horario:</strong> {farmacia.horario_Farmacia} <br />

                 {idEdit === farmacia.id && (
                <>
                    <input id="redo" value={nombre_FarmaciaEd} onChange={(e) => setNombre_FarmaciaEd(e.target.value)} type="text"/>{" "} Nombre<br />
                    <input id="redo" value={direccion_FarmaciaEd} onChange={(e) => setDireccion_FarmaciaEd(e.target.value)} type="text" />{" "} Dirección<br />
                    <input id="redo" value={telefono_FarmaciaEd} onChange={(e) => setTelefono_FarmaciaEd(e.target.value)} type="text" />{" "} Teléfono<br />
                    <input id="redo" value={horario_FarmaciaEd} onChange={(e) => setHorario_FarmaciaEd(e.target.value)} type="text" />{" "} Horario<br />
                     <br />
                 </>
                )}

            {idEdit !== farmacia.id && (
             <button id="boton13" onClick={() => inicioEd(farmacia)}> Editar </button>
            )}
                <button id="boton13" onClick={() => edicion(farmacia.id)}>Confirmar edición</button> <br />
                <button id="boton14" onClick={() => borrar(farmacia.id)}>Eliminar</button> <br />
            </ul>
        ))}
        </div>
        </div>
    )
}
export default AdminFarma;