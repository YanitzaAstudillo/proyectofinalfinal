import llamadosFarma from "../services/llamadosFarma";
import { useState,useEffect } from "react";
const AggFarmacias = () => {
    const [nombre_Farmacia, setNombre_Farmacia] = useState("");
    const [direccion_Farmacia, setDireccion_Farmacia] = useState("");
    const [telefono_Farmacia, setTelefono_Farmacia] = useState("");
    const [horario_Farmacia, setHorario_Farmacia] = useState("");
    const [sucursales_Farmacia, setSucursales_Farmacia] = useState("");

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

    const agregarFarmacia = async (e) => {
        e.preventDefault();
        const peticion = await llamadosFarma.postFarmacias(
            nombre_Farmacia,direccion_Farmacia,telefono_Farmacia,horario_Farmacia,sucursales_Farmacia,localStorage.getItem('id'),
            img
        );
        console.log(peticion);
        
    }
  return (  
    <div className="agregar-farmacias">
      <h2>Agregar Farmacias</h2>
      <div className="farmacia-list">
        <input
          type="text"
            placeholder="Nombre de la Farmacia"
            value={nombre_Farmacia}
            onChange={(e) => setNombre_Farmacia(e.target.value)}
        />
        <input
          type="text"
          placeholder="Dirección de la Farmacia"
          value={direccion_Farmacia}
          onChange={(e) => setDireccion_Farmacia(e.target.value)}
        />
        <input
            type="text"
            placeholder="Teléfono de la Farmacia"
            value={telefono_Farmacia}
            onChange={(e) => setTelefono_Farmacia(e.target.value)}
        />
        <input
          type="text"
            placeholder="Horario de la Farmacia"
            value={horario_Farmacia}
            onChange={(e) => setHorario_Farmacia(e.target.value)}
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
        <button onClick={(e)=>agregarFarmacia(e)}>Agregar farmacia</button>
      </div>
    </div>
  );
}
export default AggFarmacias;