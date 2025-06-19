
import React from 'react'
import { Link } from 'react-router-dom'

function Privada({children,rol}) {
    function adminValido() {
        const rolLocal = localStorage.getItem("submit")
        console.log(Array.isArray(rol));
        if (Array.isArray(rol)) {
            return rolLocal && rol.includes(rolLocal);
        }
        if (rolLocal) {
            return rolLocal === rol;
        } else {
            return false;
        }
    }
  return (
    <div>
        {adminValido() ? children : <div>NO VALIDO <Link to={"/AdminFarm"}></Link> </div> }
    </div>
  )
}
export default Privada