

import '../styles/socios.css';
import { Link, useNavigate } from 'react-router-dom';
import llamadosProductos from '../services/llamadosProductos';


function Socios() {

    const [listaPaquetes, setListaPaquetes] = useState([]);

    useEffect(() => {
            const traerPaquetes = async () => {
                const dats = await llamadosProductos.getProductos();
                console.log(dats);
                
                setListaPaquetes(dats);
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

    </div>
)
    
}
export default Socios;
