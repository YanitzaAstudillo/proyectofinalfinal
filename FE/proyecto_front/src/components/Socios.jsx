

import '../styles/socios.css';
import { Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosProductos from '../services/llamadosProductos';


function Socios() {

    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
            const traerPaquetes = async () => {
                const dats = await llamadosProductos.getProductos();
                console.log(dats);
                
                setListaProductos(dats);
            };
            traerPaquetes();
        }, []);

return(
    <div>
        <>
          <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
          <Link to="/Nosotros" className='enlace_sin_lineaa'>NOSOTROS</Link>
          <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
         </>

         <div className="roww">
                {listaProductos.map((producto) => (
                 <div className="tarjeta" key={producto.id}>
                 <>
                 <div className="card-bodii">
                    <h5 className="card-title">{producto.paquete}</h5>
                    <br />
                    <p className="card-text"><strong>Descripción:</strong> {producto.descripcion}</p>
                    <p className="card-text"><strong>Precio:</strong>$ {producto.precio_Paquete}</p>
                 </div>
                 </>
                 </div>
                ))}
            </div>

    </div>
)
    
}
export default Socios;
