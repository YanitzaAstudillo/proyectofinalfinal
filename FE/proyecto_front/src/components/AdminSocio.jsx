
import React, { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import llamadosProductos from '../services/llamadosProductos';
import Swal from 'sweetalert2';

function AdminSocios() {
    const nav = useNavigate();

    const [paquete, setPaquete] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio_Paquete, setPrecio_Paquete] = useState("");
    const [productos, setProductos] = useState([]);

    const [paquetes, setPaquetes] = useState([]);
    const [paqueteEd, setPaqueteEd] = useState("");
    const [descripcionEd, setDescripcionEd] = useState("");
    const [precio_PaqueteEd, setPrecio_PaqueteEd] = useState("");
    const [ids, setIds] = useState(null);

    const agregarPaquete = async (e) => {
        e.preventDefault();
        try {
            const pet = await llamadosProductos.postProductos(
                paquete,
                descripcion,
                precio_Paquete,
                localStorage.getItem('id')
            );
            console.log(pet);
            Swal.fire('¡Agregado!', 'Plan agregado correctamente.', 'success');

            const nuevos = await llamadosProductos.getProductos();
            setProductos(nuevos);
            setPaquete("");
            setDescripcion("");
            setPrecio_Paquete("");
        } catch (error) {
            Swal.fire('Error', 'No se pudo agregar el plan.', 'error');
        }
    };

    useEffect(() => {
        async function cargarPaquetes() {
            const dataaa = await llamadosProductos.getProductos();
            setPaquetes(dataaa);
        }
        cargarPaquetes();
    }, []);

    function comenzarEd(plan) {
        setIds(plan.id);
        setPaqueteEd(plan.paquete);
        setDescripcionEd(plan.descripcion);
        setPrecio_PaqueteEd(plan.precio_Paquete);
    }

    function editarPaquete(id) {
        if (!paqueteEd || !descripcionEd || !(parseInt(precio_PaqueteEd))) {
            Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
            return;
        }

        llamadosProductos.updateProductos(paqueteEd, descripcionEd, precio_PaqueteEd, id)
         .then(() => {
            Swal.fire('Plan actualizado', 'La actualización fue exitosa!', 'success');
             setPaquetes(prev =>
             prev.map(plan =>
             plan.id === id
             ? { ...plan, paquete: paqueteEd, descripcion: descripcionEd, precio_Paquete: precio_PaqueteEd }
             : plan
             )
            );
                setPaqueteEd("");
                setDescripcionEd("");
                setPrecio_PaqueteEd("");
                setIds(null);
            })
            .catch(() => {
             Swal.fire('Error', 'No se pudo actualizar', 'error');
            });
    }

    async function eliminarPaquete(id) {
        Swal.fire({
            title: "Desea eliminar?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Sí",
            denyButtonText: `No`
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
                try {
                    const elim = await llamadosProductos.deleteProductos(id);
                    if (elim) {
                        setPaquetes(prev => prev.filter(plan => plan.id !== id));
                        Swal.fire("Plan eliminado", "", "success");
                    } else {
                        Swal.fire("Error al eliminar", "", "error");
                    }
                } catch (error) {
                    Swal.fire("Error", "No se pudo completar la eliminación", "error");
                }
            } else if (result.isDenied) {
                Swal.fire("Cancelado", "No se realizaron cambios", "info");
            }
        });
    }

    return (
        <div className='body4'>
            <div className="agregar-f">
                <br />
                <input
                    type="text"
                    placeholder="Plan"
                    value={paquete}
                    onChange={(e) => setPaquete(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Precio"
                    value={precio_Paquete}
                    onChange={(e) => setPrecio_Paquete(e.target.value)}
                    required
                />
                <button id="color" onClick={agregarPaquete}>Agregar paquete</button>
            </div>

            <div className='container88'>
                <p className='tit'>Panel de Control</p><br /><br />
                <Link to={"/Admin"}><button id="boton911">ADMIN USUARIOS</button></Link>
                <Link to={"/AdminFarm"}><button id="boton181">ADMIN FARMACIAS</button></Link>
                <Link to={"/AdminClinica"}><button id="boton222">ADMIN CLINICAS</button></Link>
                <Link to={"/AdminEspecial"}><button id="boton12">ADMIN ESPECIALIDADES</button></Link>
                <Link to={"/AdminSocios"}><button id="boton102" onMouseEnter={e => { e.target.style.backgroundColor = 'aqua'; }} onMouseLeave={e => { e.target.style.backgroundColor = ''; }}>ADMIN SOCIOS</button></Link>
                <>
                    <button className="card human-resources">
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
                        <p>
                            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>CERRAR SESIÓN</Link>
                        </p>
                    </button>
                </>
            </div>

            <div className='dentroo'>
                {paquetes.map((paquete) => (
                    <ul key={paquete.id}>
                        <br />
                        <strong>Plan:</strong> {paquete.paquete} <br />
                        <strong>Descripción:</strong> {paquete.descripcion} <br />
                        <strong>Precio:</strong> {paquete.precio_Paquete} <br /><br />

                        {ids === paquete.id ? (
                            <>
                                <input id="redo" value={paqueteEd} onChange={(e) => setPaqueteEd(e.target.value)} type="text" /> Plan<br />
                                <input id="redo" value={descripcionEd} onChange={(e) => setDescripcionEd(e.target.value)} type="text" /> Descripción<br />
                                <input id="redo" value={precio_PaqueteEd} onChange={(e) => setPrecio_PaqueteEd(e.target.value)} type="text" /> Precio<br /><br />
                                <button id="boton13" onClick={() => editarPaquete(paquete.id)}>Confirmar edición</button> <br />
                            </>
                        ) : (
                            <button id="boton13" onClick={() => comenzarEd(paquete)}>Editar</button>
                        )}
                        <button id="boton14" onClick={() => eliminarPaquete(paquete.id)}>Eliminar</button> <br />
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default AdminSocios;
