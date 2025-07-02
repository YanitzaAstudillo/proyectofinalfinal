
import { useEffect, useState } from "react";
import llamadosEspecial from "../services/llamadosEspecial";
import "../styles/adminEspe.css";
import Swal from 'sweetalert2';

const AggEspe = () => {
  const [nombre_Especialidad, setNombre_Especialidad] = useState("");
  const [centroSeleccionado, setCentroSeleccionado] = useState("");
  const [descripcion_Especialidad, setDescripcion_Especialidad] = useState("");
  const [ubicacion_Especialidad, setUbicacion_Especialidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [nuevoCentroNombre, setNuevoCentroNombre] = useState("");

  const [centros, setCentros] = useState([]);

  const cargarCentros = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/centros/");
      const data = await res.json();
      setCentros(data);
    } catch (error) {
      console.error("Error cargando centros:", error);
    }
  };

  useEffect(() => {
    cargarCentros();
  }, []);

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

    Swal.fire("Especialidad agregada", "La especialidad fue registrada correctamente.", "success");
  } catch (error) {
    console.error("Error agregando especialidad:", error);

    Swal.fire("Error", "No se pudo agregar la especialidad.", "error");
  }
};

  const agregarCentrosVarios = async (e) => {
    e.preventDefault();
    const nombres = nuevoCentroNombre
    .split(",")
    .map((nombre) => nombre.trim())
    .filter((nombre) => nombre.length > 0);

  if (nombres.length === 0) {
    Swal.fire("Campo vacío", "Por favor ingrese al menos un nombre de centro.", "warning");
    return;
  }

  try {
    let errores = [];

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
        errores.push(nombre);
      }
    }
    await cargarCentros();
    setNuevoCentroNombre("");

    if (errores.length === 0) {
      Swal.fire("Centros agregados", "Todos los centros fueron registrados correctamente.", "success");
    } else {
      Swal.fire(
        "Algunos centros no se agregaron"
      );
    }
  } catch (error) {
    console.error("Error agregando centros:", error);
    Swal.fire("Error", "Ocurrió un problema al agregar los centros.", "error");
  }
};

  return (
    <div className="agregar-f">
      <h4>Agregar Especialidad</h4>
      <p>Al colocar sus datos, debe seleccionar su centro previamente agregado:</p>
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
          
        >
          <option value="">Seleccione un centro</option>
          {centros.map((centro) => (
            <option key={centro.id} value={centro.id}>
              {centro.nombre}
            </option>
          ))}
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
        <button id="color" type="submit">
          Agregar Especialidad
        </button>
      </form>

      <hr style={{ margin: "0.1rem" }} />

      <h5>IMPORTANTE: Primero debe agregar su centro asistencial:</h5>

      <form onSubmit={agregarCentrosVarios} className="f-list">
        <input
          type="text"
          placeholder="Ej: Clínica Central, Hospital Sur"
          value={nuevoCentroNombre}
          onChange={(e) => setNuevoCentroNombre(e.target.value)}
        />
        <button id="color" type="submit">
          Agregar Centro Asistencial
        </button>
      </form>
    </div>
  );
};

export default AggEspe;
