
async function getFarmacias() {
    try {
        const response = await fetch ("http://127.0.0.1:8000/api/farmacias/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching farmacias');
        }

        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Error fetching farmacias:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////


async function postFarmacias(nombre,direccion,telefono,) {
    
    const obj={
        "nombre":nombre,
        "direccion":direccion,
        "telefono":telefono
    };

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/farmacias/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateFarmacias(nombre,direccion,telefono,id) {
    const obj={
        "nombre_Farmacia": nombre,
    "direccion_Farmacia": direccion,
    "telefono_Farmacia": telefono
    };
    
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/farmacias/${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update farmacia:', error);
        throw error;
    }
}



//////////////LLAMADO DELETE/////////////


async function deleteFarmacias(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/farmacias/${id}/`, {
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
        console.error('Error deleting user:', error);
        throw error;
    }
}

export default { deleteFarmacias,postFarmacias,updateFarmacias,getFarmacias };