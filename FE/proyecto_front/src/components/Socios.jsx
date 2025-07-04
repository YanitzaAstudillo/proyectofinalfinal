    
import '../styles/socios.css';
import { Link, useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosProductos from '../services/llamadosProductos';
import PaidIcon from '@mui/icons-material/Paid';

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

        const navigate= useNavigate()

    return(
        <div className="body3">
        <nav className="nav-bar2">
            <Link to="/PagInicio" className="nav-link2">Inicio</Link>
            <Link to="/Nosotros" className="nav-link2">Nosotros</Link>
            <Link to="/Contac" className="nav-link2">Contacto</Link>
        </nav>
            <img
             src="https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg?auto=compress&cs=tinysrgb&w=800"
             alt="Cirujanos operando en quirófano"
             className="header-image"
        />
        <div className="roww2">
            {listaProductos.map((producto) => (
             <div className="tarjeta" key={producto.id}>
             <>
             <div className="card-bodii2">
             <h5 className="card-title1">{producto.paquete}</h5>
             <br />
             <p className="card-text2"><strong>Descripción:</strong> {producto.descripcion}</p>
             <p className="card-text3"><strong> <PaidIcon/> Precio:</strong> {producto.precio_Paquete}</p>
             
             <button onClick={() => { navigate('/Plan', {state: { price: producto.precio_Paquete },});
                }} size="lg"
                style={{
                backgroundColor: '#00008B',
                color: '#fff',
                borderRadius: '8px',
                padding: '5px 20px',
                border: 'none',
                cursor: 'pointer'
                }}
                >Comprar plan
            </button>
             
             </div>
             </>
        </div>
            ))}
        </div>
           
    </div>
)
    
}
export default Socios;
