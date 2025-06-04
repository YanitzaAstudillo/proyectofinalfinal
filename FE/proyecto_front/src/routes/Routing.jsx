
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagInicio from '../pages/PagInicio.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Admin from '../pages/Admin.jsx';
import Contac from '../pages/Contac.jsx';
import Mision from '../pages/Mision.jsx';
import Farmacias from '../pages/Farmacias.jsx';
//import AdminFarm from '../pages/AdminFarm.jsx';
//import Privada from '../componentes/Privada.jsx';
//<Route path="/AdminFarm" element={<Privada children={<AdminFarm/>}/>} />

function Routing() {
    
    return(
        <div>
            <Router>
                <Routes>

                 
                 <Route path="/Farmacias" element={<Farmacias/>}/>
                 <Route path="/Mision" element={<Mision/>}/>
                 <Route path="/Contac" element={<Contac/>}/>
                 <Route path="/Admin" element={<Admin/>}/>
                 <Route path="/Register" element={<Register/>}/>
                 <Route path="/Login" element={<Login/>}/>
                 <Route path="/PagInicio" element={<PagInicio/>}/>
                 <Route path="/" element={<PagInicio/>}/>
                            
                </Routes>
            </Router>
        </div>
    );

}

export default Routing