

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

//////////////LOGIN PROTEGIDO/////////////

async function postUsuarios(username,password) {
    
    const obj={
        "username":username,
        "password":password,
        
    };

    try {
        const response = await fetch ("http://127.0.0.1:8000/api/validarUsuario/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const respuesta = await response.json()
        console.log(respuesta);
        
        return respuesta
        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

//////////////LLAMADO UPDATE/////////////


async function updateUsuarios(username,password,id) {
    
    
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