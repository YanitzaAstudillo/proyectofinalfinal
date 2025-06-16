
async function getEspecialidades() {
    try {
        const response = await fetch ("http://127.0.0.1:8000/api/especialidades-get/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching especialidades');
        }

        const especialidades = await response.json();
        return especialidades;
    } catch (error) {
        console.error('Error fetching especialidades:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////


async function postEspecialidades(nombre_Especialidad,nombre_Medico_Clinica,descripcion_Especialidad,ubicacion_Especialidad,telefono_Especialidad,precio) {
    
    const obj={
        "nombre":nombre_Especialidad,
        "nombre clinica":nombre_Medico_Clinica,
        "descripcion":descripcion_Especialidad,
        "ubicacion": ubicacion_Especialidad,
        "telefono":telefono_Especialidad,
        "precio":precio
    };

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/especialidades/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();

        
    } catch (error) {
        console.error('Error posting especialidades:', error);
        throw error;
    }
}

//////////////LLAMADO UPDATE/////////////


async function updateEspecialidades(nombre_Especialidad,nombre_Medico_Clinica,descripcion_Especialidad,ubicacion_Especialidad,telefono_Especialidad, precio ,id) {
    const obj={
        "nombre_Especialidad": nombre_Especialidad,
        "nombre_Medico_Clinica":nombre_Medico_Clinica,
        "descripcion_Especialidad": descripcion_Especialidad,
        "ubicacion_Especialidad":ubicacion_Especialidad,
        "telefono_Especialidad": telefono_Especialidad,
        "precio":precio
    };
    
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/editar-especialidad/${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update especialidad:', error);
        throw error;
    }
}

//////////////LLAMADO DELETE/////////////

async function deleteEspecialidades(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/todas-especialidades/${id}/`, {
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
        console.error('Error deleting especilidad:', error);
        throw error;
    }
}

export default { deleteEspecialidades,postEspecialidades,updateEspecialidades,getEspecialidades };