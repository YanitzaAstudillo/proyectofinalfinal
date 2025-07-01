
async function getClinicas() {
    try {
        const response = await fetch ("http://127.0.0.1:8000/api/clinicas-get/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching clinicas');
        }

        const clinicas = await response.json();
        return clinicas;
    } catch (error) {
        console.error('Error fetching clinicas:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////


async function postClinicas(
    nombreClinica,
    direccionClinica,
    horario,
    telefonoClinica,
    provinciaId
) {
  const obj = {
    nombre_Clinica: nombreClinica,
    direccion_Clinica: direccionClinica,
    horario,
    telefono_Clinica: telefonoClinica,
    Provincias: provinciaId,
  };

  console.log("Enviando clínica:", obj);

  try {
    const response = await fetch("http://127.0.0.1:8000/api/clinicas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error del servidor:", response.status, data);
      throw new Error("Error al crear clínica");
    }

    return data;
  } catch (error) {
    console.error("Error en postClinicas:", error);
    throw error;
  }
}

//////////////LLAMADO UPDATE/////////////

async function updateClinicas(nombre_Clinica,direccion_Clinica,horario,telefono_Clinica,nombre_Provincia,id) {
    const obj={
        "nombre_Clinica": nombre_Clinica,
        "direccion_Clinica":direccion_Clinica,
        "horario": horario,
        "telefono_Clinica":telefono_Clinica,
        "Provincias": parseInt(nombre_Provincia)
    };
    console.log(obj);
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/editar-clinica/${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.error('Error update clinica:', error);
        throw error;
    }
}

//////////////LLAMADO DELETE/////////////

async function deleteClinicas(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/todas-clinicas/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting clinica:', error);
        throw error;
    }
}

export default { deleteClinicas,postClinicas,updateClinicas,getClinicas };