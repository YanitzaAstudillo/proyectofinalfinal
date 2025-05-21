
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PagInicio from '../pages/PagInicio.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';


function Routing() {
    
    return(
        <div>
            <Router>
        <Routes>

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