
async function getUsuarios() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/Usuarios/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching usuarios');
        }

        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Error fetching usuarios:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postUsuarios(nombreUsuarios, descripcionProducto, precio, cantidad) {
    
    const obj={
        "nombre":nombreProducto,
        "descripcion":descripcionProducto,
        "precio":precio,
        "cantidad":cantidad
    };

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/Usuarios/", {
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


async function updateUsuarios(nombreUsuarios,descripcionProducto,precio,cantidad,id) {
    const obj={
        "nombre":nombreProducto,
        "descripcion":descripcionProducto,
        "precio":precio,
        "cantidad":cantidad
    };
    
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/Usuarios/${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}



//////////////LLAMADO DELETE/////////////


async function deleteUsuarios(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/Usuarios/${id}/`, {
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

export default { deleteUsuarios,postUsuarios,updateUsuarios,getUsuarios };