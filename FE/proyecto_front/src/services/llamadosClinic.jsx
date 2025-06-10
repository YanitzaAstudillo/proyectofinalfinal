
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


async function postClinicas(nombre_Clinica,direccion_Clinica,horario,telefono_Clinica,Provincia) {
    
    const obj={
        "nombre":nombre_Clinica,
        "direccion":direccion_Clinica,
        "horario":horario,
        "telefono": telefono_Clinica,
        "Provincia":Provincia
    };

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/clinicas/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();

        
    } catch (error) {
        console.error('Error posting clinicass:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateClinicas(nombre_Clinica,direccion_Clinica,horario,telefono_Clinica,Provincia,id) {
    const obj={
        "nombre_Clinica": nombre_Clinica,
        "direccion_Clinica":direccion_Clinica,
        "horario": horario,
        "telefono_Clinica":telefono_Clinica,
        "Provincia": Provincia
    };
    
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