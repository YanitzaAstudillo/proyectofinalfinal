
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
        cargarUsuarios()
        
    },[]);

        function iniciarEdicion(usuario) {
            setIdEditando(usuario.id);
            setEmailEditar(usuario.email);
            setDireccionEditar(usuario.direccion);
            setTelefonoEditar(usuario.telefono);
        }

    function editar(id) {   
        console.log(id);
        const token = localStorage.getItem("token");

    if (!emailEditar || !direccionEditar || !telefonoEditar) {
        Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
        return;
    }

    llamados.updateUsuarios(emailEditar, direccionEditar, telefonoEditar, id,token)
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
             <p className="titlle">Panel de Control</p>
             <br /><br />
            <div>
             <Link to={"/Admin"}><button id="boton9">ADMIN USUARIOS</button></Link>
             <Link to={"/AdminFarm"}><button id="boton10">ADMIN FARMACIAS</button></Link>
             <Link to={"/AdminClinica"}><button id="boton11">ADMIN CLINICAS</button></Link>
             <Link to={"/AdminEspecial"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
             <Link to={"/AdminSocios"}><button id="boton102">ADMIN SOCIOS</button></Link>
            <>
                <>
                 <button className="card human-resources" href="/">
                <div className="overlay" />
                <div className="circle">
                 <svg xmlnsXlink="/" xmlns="" version="1.1" viewBox="1855 26 66 77" height="77px" width="66px">
                 <desc>Created with Sketch.</desc>
                 <defs />
                 <g transform="translate(1855.000000, 26.000000)" fillRule="evenodd" fill="none" strokeWidth={1} stroke="none" id="Page-1">
                 <path fill="#AFCEFF" id="Fill-8" d="M4.28872448,42.7464904 C4.28872448,39.3309774 5.4159227,33.7621426 6.40576697,30.4912557 C10.5920767,32.1098991 14.3021264,35.1207513 18.69596,35.1207513 C30.993618,35.1207513 42.5761396,28.7162991 49.9992251,17.9014817 C56.8027248,23.8881252 60.8188351,33.0463165 60.8188351,42.7464904 C60.8188351,60.817447 47.6104607,76.6693426 32.5537798,76.6693426 C17.4970989,76.6693426 4.28872448,60.817447 4.28872448,42.7464904" />
                 <path fill="#3B6CB7" id="Fill-10" d="M64.3368879,31.1832696 L62.8424171,46.6027478 L60.6432609,46.7824348 L59.8340669,34.6791304 L47.6573402,25.3339478 C44.2906753,34.068487 34.3459503,40.2903304 24.4684093,40.2903304 C17.7559812,40.2903304 10.046244,37.4168 5.80469412,32.8004522 L5.80469412,34.6791304 L5.80469412,46.6027478 L4.28932167,46.6027478 L1.30187314,27.8802435 C1.30187314,20.9790957 3.52342407,15.5432 7.27229127,11.3578087 C13.132229,4.79558261 21.8124018,0.0492173913 30.5672235,0.342852174 C37.4603019,0.569286957 42.6678084,2.72991304 50.8299179,0.342852174 C51.4629405,1.44434783 51.8615656,3.00455652 51.5868577,5.22507826 C51.4629405,6.88316522 51.2106273,7.52302609 50.8299179,8.45067826 C58.685967,14.1977391 64.3368879,20.7073739 64.3368879,31.1832696" />
                 <path fill="#568ADC" id="Fill-13" d="M58.9405197,54.5582052 C62.0742801,54.8270052 65.3603242,52.60064 65.6350321,49.5386574 C65.772386,48.009127 65.2617876,46.5570226 64.3182257,45.4584487 C63.3761567,44.3613357 62.0205329,43.6162922 60.4529062,43.4818922 L58.9405197,54.5582052 Z" />
                 <path fill="#568ADC" id="Fill-15" d="M6.32350389,54.675367 C3.18227865,54.8492104 0.484467804,52.4957496 0.306803449,49.4264626 C0.217224782,47.8925496 0.775598471,46.4579757 1.75200594,45.3886191 C2.7284134,44.3192626 4.10792487,43.6165843 5.67853749,43.530393 L6.32350389,54.675367 Z" />
                 </g>
                 </svg>
                </div>
                    <p><Link to="/" style={{ color: 'white', textDecoration: 'none' }} >CERRAR SESION</Link></p>
                </button>
            </>
            </>
            </div>
        </div>
            <div className='dentro'>
                {usuarios.map((usuario) => (
                
                <ul key={usuario.id}className="usuario-card">
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
