
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
        <div className='body4'>
            <Link to="/PagInicio" className='enlace_sin_linea'>INICIO</Link>
            <Link to="/Login" className='enlace_sin_lineaa'>NOSOTROS</Link>
            <Link to="/Contac" className='enlace_sin_linea1'>CONTACTO</Link>
            
            <div className='far'>
                <ListCardFarmacia farmacias={listaFarmacias}/>
            </div>
                
        </div>
        </>
    );
}

export default Farma;
