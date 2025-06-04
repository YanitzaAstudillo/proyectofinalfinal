
import React from 'react'
import { Link } from 'react-router-dom'

function Privada({children}) {
    function adminValido() {
        const admi=localStorage.getItem("submit")
        if (admi) {
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