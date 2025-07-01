    
import '../styles/socios.css';
import { Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import llamadosProductos from '../services/llamadosProductos';
import panam from '../assets/panam.png';
import medis from '../assets/medis.png'
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
             </div>
             </>
        </div>
            ))}
        </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop:'0px', gap: '10px', width: '320px', flexShrink: 0 }}>
                <img src={panam} alt="Decoracion Aniv" style={{ width: '100%', borderRadius: '10px', opacity: 0.6 }}/>
                <img src={medis} alt="Decoracion Metro"  style={{ width: '100%', borderRadius: '10px', opacity: 0.6 }}/>
            </div>

    </div>
)
    
}
export default Socios;
