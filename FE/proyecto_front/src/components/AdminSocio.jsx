
import { useEffect, useState } from 'react';
import '../styles/AdminSocios.css';
import { useNavigate } from 'react-router-dom';
import llamadosProductos from '../services/llamadosProductos';
import Swal from 'sweetalert2';

function Socios() {
    const nav = useNavigate();

    const[paquete, setPaquete] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const[precio_Paquete, setPrecio_Paquete] = useState("");
    

    const [paquetes, setPaquetes] =useState([]);
    const[paqueteEd, setPaqueteEd] =useState("");
    const[descripcionEd, setDescripcionEd] =useState("");
    const[precio_PaqueteEd, setPrecio_PaqueteEd] =useState("");
    const[ids, setIds] = useState(null);

    const nombrePaq = (e) => setPaquete(e.target.value);
    const descripcionPaq = (e) => setDescripcion(e.target.value);
    const precioPaque = (e) => setPrecio_Paquete(e.target.value);

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
            setPaquetes(nuevos);
  
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

    function editas(id) {
        if (!paqueteEd || !descripcionEd || !precio_PaqueteEd) {
            Swal.fire('¡Error!', 'Todos los campos deben estar completos.', 'error');
            return;
        }

        llamadosProductos.updateProductos(paqueteEd, descripcionEd, precio_PaqueteEd)
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

    async function eliminacionnn(id) {
        const confirmacion = window.confirm("¿Está seguro de eliminar?");
        if (!confirmacion) return;

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
    }

    return (
        <div className='body4'>
         <div className="agregar-f">
         <br />
         <label>PAQUETES</label>
         <input id="ree" onChange={nombrePaq} value={paquete} type="text" /> <br /><br />
         <label>DESCRIPCION</label>
         <input id="ree" onChange={descripcionPaq} value={descripcion} type="text" /> <br /><br />
         <label>PRECIO</label>
         <input id="ree" onChange={precioPaque} value={precio_Paquete} type="text" /> <br />
         <button id="color" onClick={agregarPaquete}>Agregar paquete</button>
         </div>

          <div className='dentroo'>
            {paquetes.map((plan) => (
          <ul key={plan.id}>
            <br />
            <strong>Plan:</strong> {plan.paquete} <br />
            <strong>Descripcion:</strong> {plan.descripcion} <br />
            <strong>Precio:</strong> {plan.precio_Paquete} <br /><br />

            {ids === plan.id ? (
         <>
            <input id="redo" value={paqueteEd} onChange={(e) => setPaqueteEd(e.target.value)} type="text" /> Plan<br />
            <input id="redo" value={descripcionEd} onChange={(e) => setDescripcionEd(e.target.value)} type="text" /> Descripción<br />
            <input id="redo" value={precio_PaqueteEd} onChange={(e) => setPrecio_PaqueteEd(e.target.value)} type="text" /> Precio<br /><br />
            <button id="boton13" onClick={() => editas(plan.id)}>Confirmar edición</button> <br />
         </>
             ) : (
            <button id="boton13" onClick={() => comenzarEd(plan)}>Editar</button>
            )}
            <button id="boton14" onClick={() => eliminacionnn(plan.id)}>Eliminar</button> <br />
         </ul>
         ))}
        </div>
     </div>
    );
}

export default Socios;
