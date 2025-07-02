
import { useState,useEffect } from 'react';
import '../styles/farmacia.css';
import { Link } from 'react-router-dom';
import llamadosFarma from '../services/llamadosFarma';
import ListCardFarmacia from './ListCardFarmacia';

function Farma() {
    const [listaFarmacias,setListaFarmacias] = useState([])

    useEffect(()=>{
        const traerFarmacias = async()=>{
            const datos = await llamadosFarma.getFarmacias()
            console.log(datos);
            
            const datosConHorarios = datos.map((farmacia) => ({
            ...farmacia,
            horarios: farmacia.horario_Farmacia?.split('\n') || [], //se convierte en un array!!//
            }));

            setListaFarmacias(datos)
            setListaFarmacias(datosConHorarios);
        }
        traerFarmacias()
    },[])
   
    return (
        <>
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
      
            <div className='far'>
             <ListCardFarmacia farmacias={listaFarmacias}/>
            </div>
        </div>
        </>
    );
}

export default Farma;
