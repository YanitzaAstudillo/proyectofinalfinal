
import llamadosClinic from '../services/llamadosClinic';
import { useState } from "react";
import '../styles/adminClinic.css';
import Swal from 'sweetalert2';


const AggClinicas = () => {
const [nombre_Clinica,setNombre_Clinica]= useState("");
const [direccion_Clinica, setDireccion_Clinica]= useState("");
const [horario, setHorario]= useState("");
const [telefono_Clinica,setTelefono_Clinica]=useState("");
const [Provincias,setProvincias]=useState("");


  const agregarClinica = async (e) => {
   e.preventDefault();

  try {
    console.log(Provincias);

    const trae = await llamadosClinic.postClinicas(
      nombre_Clinica,
      direccion_Clinica,
      horario,
      telefono_Clinica,
      Provincias,
      localStorage.getItem('id')
    );

    console.log(trae);

    Swal.fire({
      icon: 'success',
      title: 'Clínica agregada',
      text: 'La clínica se registró correctamente.',
    });

    setNombre_Clinica("");
    setDireccion_Clinica("");
    setHorario("");
    setTelefono_Clinica("");
    setProvincias("");

  } catch (error) {
    console.error("Error al agregar clínica:", error);

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo agregar la clínica. Intenta nuevamente.',
    });
  }
};


    return (  
    <div className="agregar-f">
      <h2>Agregar Clinicas</h2>
      <div className="f-list">
        
        <input
          type="text"
            placeholder="Nombre de la Clinica" 
            value={nombre_Clinica}
            onChange={(e) => setNombre_Clinica(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección de la clinica"
          value={direccion_Clinica}
          onChange={(e) => setDireccion_Clinica(e.target.value)}
        />
        <input
            type="text"
            placeholder="Horario de la clinica"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
        />
        <input
          type="text"
            placeholder="Telefono de la clinica"
            value={telefono_Clinica}
            onChange={(e) => setTelefono_Clinica(e.target.value)}
        />
        <input
          type="text"
            placeholder="Provincias"
            value={Provincias}
            onChange={(e) => setProvincias(e.target.value)}
        />
        
        <button id= "color" onClick={(e)=>agregarClinica(e)}>Agregar clinica</button>
      </div>
    </div>
  );
}
export default AggClinicas;