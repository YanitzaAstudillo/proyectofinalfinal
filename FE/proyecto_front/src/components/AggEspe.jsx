
import { useState } from "react";
import llamadosEspecial from '../services/llamadosEspecial';
import '../styles/adminEspe.css';

const AggEspe = () => {
  
  const [nombre_Especialidad, setNombre_Especialidad] = useState("");
  const [centroSeleccionado, setCentroSeleccionado] = useState("");
  const [descripcion_Especialidad, setDescripcion_Especialidad] = useState("");
  const [ubicacion_Especialidad, setUbicacion_Especialidad] = useState("");
  
  const [precio, setPrecio] = useState("");

  const [nuevoCentroNombre, setNuevoCentroNombre] = useState("");



  const agregarEspecialidad = async (e) => {
    e.preventDefault();
    try {
      const response = await llamadosEspecial.postEspecialidades(
        nombre_Especialidad,
        centroSeleccionado,
        descripcion_Especialidad,
        ubicacion_Especialidad,
        
        precio
      );
      console.log("Especialidad agregada:", response);
      setNombre_Especialidad("");
      setCentroSeleccionado("");
      setDescripcion_Especialidad("");
      setUbicacion_Especialidad("");
      
      setPrecio("");
    } catch (error) {
      console.error("Error agregando especialidad:", error);
    }
  };

  const agregarCentrosVarios = async (e) => {
    e.preventDefault();
    const nombres = nuevoCentroNombre
      .split(',')
      .map((nombre) => nombre.trim())
      .filter((nombre) => nombre.length > 0);

    try {
      for (let nombre of nombres) {
        const res = await fetch("http://127.0.0.1:8000/api/centros/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre }),
        });

        if (!res.ok) {
          console.error(`Error creando centro: ${nombre}`);
        }
      }

      await cargarCentros();
      setNuevoCentroNombre("");
    } catch (error) {
      console.error("Error agregando centros:", error);
    }
  };

  return (
    <div className="agregar-f">
      <h2>Agregar Especialidad</h2>
      <form className="f-list" onSubmit={agregarEspecialidad}>
        <input
          type="text"
          placeholder="Nombre de la especialidad"
          value={nombre_Especialidad}
          onChange={(e) => setNombre_Especialidad(e.target.value)}
          required
        />
        <select
          value={centroSeleccionado}
          onChange={(e) => setCentroSeleccionado(e.target.value)}
          required
        >
          
        </select>
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion_Especialidad}
          onChange={(e) => setDescripcion_Especialidad(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ubicación"
          value={ubicacion_Especialidad}
          onChange={(e) => setUbicacion_Especialidad(e.target.value)}
          required
        />
        
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
        <button id="color" type="submit">Agregar Especialidad</button>
      </form>

      <hr style={{ margin: "2rem 0" }} />

      <h4>Agregar centros asistenciales (separados con coma)</h4>
      <form onSubmit={agregarCentrosVarios} className="f-list">
        <input
          type="text"
          placeholder="Ej: Clínica Central, Hospital Sur"
          value={nuevoCentroNombre}
          onChange={(e) => setNuevoCentroNombre(e.target.value)}
          
        />
        <button id="color" type="submit">Agregar Centro Asistencial</button>
      </form>
    </div>
  );
};

export default AggEspe;
