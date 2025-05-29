
import { Link, useNavigate } from 'react-router-dom';
import '../styles/admin.css';

function Pagadmin() {
    const navigate = useNavigate()
    

    return (
        <div className="body2">


            <div className="container9">
                <p className="title">Panel de Control</p>
                <br />
                <br />
                <form >
                    <Link to={"/Admin"}> <button id="boton9" >ADMIN ESPECIALIDADES</button></Link>
                    
                    <br />
                    
                </form>
                
            </div>
         
        </div>
    )
}
export default Pagadmin