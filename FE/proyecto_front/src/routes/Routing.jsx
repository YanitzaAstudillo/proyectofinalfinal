
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagInicio from '../pages/PagInicio.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import Admin from '../pages/Admin.jsx';
import Contac from '../pages/Contac.jsx';
import Mision from '../pages/Mision.jsx';
import Farmacias from '../pages/Farmacias.jsx';
import Especialidades from '../pages/Especialidades.jsx';
import AdminEspecial from '../pages/AdminEspecial.jsx';
import Clinicas from '../pages/Clinicas.jsx';
import AdminClinica from '../pages/AdminClinica.jsx';
import Nosotros from '../pages/Nosotros.jsx'
import AdminFarm from '../pages/AdminFarm.jsx';
import Privada from '../components/Privada.jsx';
import SociosPag from '../pages/SociosPag.jsx';
import AdminSocios from '../pages/AdminSocios.jsx';


function Routing() {
    
    return(
        <div>
            <Router>
                <Routes>

                 <Route path="/AdminSocios" element={<Privada rol={["asociado","administrador"]} children={<AdminSocios/>}/>} />
                 <Route path="/SociosPag" element={<SociosPag/>}/>
                 <Route path="/Nosotros" element={<Nosotros/>}/>
                 <Route path="/AdminFarm" element={<Privada rol={["asociado","administrador"]} children={<AdminFarm/>}/>} />
                 <Route path="/AdminClinica" element={<Privada rol={["asociado","administrador"]} children={<AdminClinica/>}/>} />
                 <Route path="/Clinicas" element={<Clinicas/>}/>
                 <Route path="/AdminEspecial" element={<Privada rol={["asociado","administrador"]} children={<AdminEspecial/>}/>} />
                 <Route path="/Especialidades" element={<Especialidades/>}/>
                 <Route path="/Farmacias" element={<Farmacias/>}/>
                 <Route path="/Mision" element={<Mision/>}/>
                 <Route path="/Contac" element={<Contac/>}/>
                 <Route path="/Admin" element={<Privada rol={["asociado","administrador"]} children={<Admin/>}/>}/>
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