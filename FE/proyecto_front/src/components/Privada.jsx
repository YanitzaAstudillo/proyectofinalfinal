
import React from 'react'
import { Link } from 'react-router-dom'

function Privada({children,rol}) {
    function adminValido() {
        const rolLocal = localStorage.getItem("submit")
        if (rolLocal === rol) {
            return true
        }else{
            return false
        }
    }
  return (
    <div>
        {adminValido() ? children : <div>NO VALIDO <Link to={"/AdminFarm"}></Link> </div> }
    </div>
  )
}
export default Privada