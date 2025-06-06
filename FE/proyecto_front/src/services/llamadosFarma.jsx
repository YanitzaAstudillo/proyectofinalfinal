
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

        const farmacias = await response.json();
        return farmacias;
    } catch (error) {
        console.error('Error fetching farmacias:', error);
        throw error;
    }
}


//////////LLAMADO POST//////////


async function postFarmacias(nombre_Farmacia,direccion_Farmacia,telefono_Farmacia,horario_Farmacia) {
    
    const obj={
        "nombre":nombre_Farmacia,
        "direccion":direccion_Farmacia,
        "telefono":telefono_Farmacia,
        "horario":horario_Farmacia
    };

    const token= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90e…I6NH0.ddwm7Ey8zlzYttUPw6EAnaOKZRPeAH1Yq6S0gGsfGxg'

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/farmacias/", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        return await response.json();

        
    } catch (error) {
        console.error('Error posting farmacias:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateFarmacias(nombre_Farmacia,direccion_Farmacia,telefono_Farmacia,horario_Farmacia,id) {
    const obj={
        "nombre_Farmacia": nombre_Farmacia,
        "direccion_Farmacia": direccion_Farmacia,
        "telefono_Farmacia": telefono_Farmacia,
        "horario_Farmacia":horario_Farmacia
    };
    
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/editar-farmacias/${id}/`,{
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
        const response = await fetch(`http://127.0.0.1:8000/api/todas-farmacias/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting farmacias with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting farmacias:', error);
        throw error;
    }
}

export default { deleteFarmacias,postFarmacias,updateFarmacias,getFarmacias };