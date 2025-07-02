
async function getEspecialidades() {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/especialidades-get/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error("Error fetching especialidades");
    }

    const especialidades = await response.json();
    return especialidades;
  } catch (error) {
    console.error("Error fetching especialidades:", error);
    throw error;
  }
}


async function postEspecialidades(nombre_Especialidad,centro_id,descripcion_Especialidad,ubicacion_Especialidad,precio) {
  const obj = {
    nombre_Especialidad,
    centro: parseInt(centro_id),
    descripcion_Especialidad,
    ubicacion_Especialidad,
    precio: parseInt(precio),
  };

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/especialidades/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Respuesta del backend:", errorText);
      throw new Error("Falló el POST");
    }

    return await response.json();
  } catch (error) {
    console.error("Error posting especialidades:", error);
    throw error;
  }
}


async function updateEspecialidades(
  nombre_Especialidad,
  centro_id,
  descripcion_Especialidad,
  ubicacion_Especialidad,
  precio,
  id
) {
  const obj = {
    nombre_Especialidad,
    centro: parseInt(centro_id),
    descripcion_Especialidad,
    ubicacion_Especialidad,
    precio: parseInt(precio),
  };

  try {
    const response = await fetch(`http://127.0.0.1:8000/api/editar-especialidad/${id}/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    });

    return await response.json();
  } catch (error) {
    console.error("Error update especialidad:", error);
    throw error;
  }
}


async function deleteEspecialidades(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/api/todas-especialidades/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error deleting especialidad with id ${id}`);
    }

    return { message: `Especialidad con id ${id} eliminada correctamente` };
  } catch (error) {
    console.error("Error deleting especialidad:", error);
    throw error;
  }
}

export default {
  deleteEspecialidades,
  postEspecialidades,
  updateEspecialidades,
  getEspecialidades,
};