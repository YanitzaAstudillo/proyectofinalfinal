
import llamadosClinic from '../services/llamadosClinic';
import { useState,useEffect } from "react";
import '../styles/AdminClinica.css';


const AggClinicas = () => {
const [nombre_Clinica,setNombre_Clinica]= useState("");
const [direccion_Clinica, setDireccion_Clinica]= useState("");
const [horario, setHorario]= useState("");
const [telefono_Clinica,setTelefono_Clinica]=useState("");

const [img, setImg] = useState(null)

 async function uploadImageToCloudinary(file) {
    const url = "https://api.cloudinary.com/v1_1/dic09m8ij/upload";
    const preset = "imagen";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset);

    try {
      const res = await fetch(url, {
        method: "POST",
        body: formData
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Imagen subida con éxito:", data.secure_url);
        setImg(data.secure_url);
        return data.secure_url; 
      } else {
        console.error("Error al subir la imagen:", data);
        return null;
      }
    } catch (error) {
      console.error("Error de red al subir la imagen:", error);
      return null;
    }
  }

    const agregarClinica = async (e) => {
        e.preventDefault();
        const trae = await llamadosClinic.postClinicas(
            nombre_Clinica,direccion_Clinica,horario,telefono_Clinica,,localStorage.getItem('id'),
            img
        );
        console.log(trae);
    }

    return (  
    <div className="agregar-farmacias">
      <h2>Agregar Clinicas</h2>
      <div className="farmacia-list">
        
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
            placeholder="Sucursales de la Farmacia"
            value={sucursales_Farmacia}
            onChange={(e) => setSucursales_Farmacia(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e)=>uploadImageToCloudinary(e.target.files[0])}
        />
        <button id= "color" onClick={(e)=>agregarClinica(e)}>Agregar clinica</button>
      </div>
    </div>
  );

}
