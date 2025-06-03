
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import llamados from '../services/llamados.jsx';
import '../styles/admin.css';
import Swal from 'sweetalert2';

function Pagadmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [emailEditar, setEmailEditar] = useState("");
    const [direccionEditar, setDireccionEditar] = useState("");
    const [telefonoEditar, setTelefonoEditar] = useState("");
    const [idEditando, setIdEditando] = useState(null)
    

    useEffect(() => {
        async function cargarUsuarios() {
            const dato = await llamados.getUsuarios();
            setUsuarios(dato);
        }
        cargarUsuarios();
    }, []);

        function iniciarEdicion(usuario) {
            setIdEditando(usuario.id);
            setEmailEditar(usuario.email);
            setDireccionEditar(usuario.direccion);
            setTelefonoEditar(usuario.telefono);
        }

    function editar(id) {   
        console.log(id);
        
    if (!emailEditar || !direccionEditar || !telefonoEditar) {
        Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
        return;
    }

    llamados.updateUsuarios(emailEditar, direccionEditar, telefonoEditar, id)
        .then(() => {
            Swal.fire('Usuario actualizado', 'La actualización fue exitosa!', 'success');

            setUsuarios(prev =>
                prev.map(usuario =>
                    usuario.id === id
                        ? { ...usuario, email: emailEditar, direccion: direccionEditar, telefono: telefonoEditar }
                        : usuario
                )
            );

            
            setEmailEditar("");
            setDireccionEditar("");
            setTelefonoEditar("");
            setIdEditando(null);
        })
        .catch(() => {
            Swal.fire('Error', 'No se pudo actualizar el usuario.', 'error');
        });
}

    function eliminar(id) {
        async function elimin(id) {
            const confirmado = window.confirm("¿Está seguro de eliminar este usuario?");
            if (!confirmado) return;
    
            const eliminado = await llamados.deleteUsuarios(id);
            if (eliminado) {
                setUsuarios(prev => prev.filter(usuario => usuario.id !== id));
                Swal.fire("usuario eliminado", "", "success");
            } else {
                Swal.fire("Error al eliminar usuario", "", "error");
            }
        }
    
        elimin(id);
    }


    return (
        <div className="body2">
            <div className="container9">
                <p className="title">Panel de Control</p>
                <br /><br />
                <div>
                    <Link to={"/Admin"}><button id="boton9">ADMIN USUARIOS</button></Link>
                    <Link to={"/AdminFarm"}><button id="boton10">ADMIN FARMACIAS</button></Link>
                    <Link to={"/"}><button id="boton11">ADMIN CLINICAS</button></Link>
                    <Link to={"/"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                </div>
            </div>
            <div className='dentro'>
                {usuarios.map((usuario) => (
                <ul key={usuario.id}>
                 <br />
                 <strong>Email usuario:</strong> {usuario.email} <br />
                 <strong>Dirección usuario:</strong> {usuario.direccion} <br />
                 <strong>Teléfono:</strong> {usuario.telefono} <br />

                 {idEditando === usuario.id && (
                <>
                    <input id="redo" value={emailEditar} onChange={(e) => setEmailEditar(e.target.value)} type="text"/>{" "} Email<br />
                     <input id="redo" value={direccionEditar} onChange={(e) => setDireccionEditar(e.target.value)} type="text" />{" "} Dirección<br />
                    <input id="redo" value={telefonoEditar} onChange={(e) => setTelefonoEditar(e.target.value)} type="text" />{" "} Teléfono<br />
                     <br />
                 </>
                )}

            {idEditando !== usuario.id && (
             <button id="boton13" onClick={() => iniciarEdicion(usuario)}> Editar </button>
            )}
                <button id="boton13" onClick={() => editar(usuario.usuario_id)}>Confirmar edición</button> <br />
                <button id="boton14" onClick={() => eliminar(usuario.id)}>Eliminar</button> <br />
            </ul>
        ))}
         </div>
     </div>
    );
}

export default Pagadmin;
