
async function getUsuarios() {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch("http://127.0.0.1:8000/api/todos-usuarios/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                
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

async function postUsuarios(username,password,first_name,last_name,email, direccion, telefono,esta_asociado) {
    
    const obj={
        "username":username,
        "password":password,
        "first_name":first_name,
        "last_name":last_name,
        "email":email,
        "direccion":direccion,
        "telefono":telefono,
        "esta_asociado":esta_asociado
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


async function updateUsuarios(email, direccion, telefono,id, token) {
    const obj={
        
        "email":email,
        "direccion":direccion,
        "telefono":telefono
        
    };
    
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/editar-usuarios/${id}/`,{
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
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
        const response = await fetch(`http://127.0.0.1:8000/api/todos-usuarios/${id}/`, {
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