
async function getProductos() {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos-get/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching productos');
        }

        const productos = await response.json();
        return productos;
    } catch (error) {
        console.error('Error fetching productos:', error);
        throw error;
    }
}

//////////LLAMADO POST//////////

async function postProductos(paquete,descripcion,precio_Paquete) {
    
    const obj={
        "paquete":paquete,
        "descripcion":descripcion,
        "precio_Paquete": parseInt(precio_Paquete)
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/api/productos/", {
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


async function updateProductos(paquete,descripcion,precio_Paquete,id) {
    const obj = {
        paquete,
        descripcion,
        precio:parseInt(precio_Paquete)
    };
    
    try {

        const response = await fetch(`http://127.0.0.1:8000/api/editar-productos/${id}/`, {
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


async function deleteProductos(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/todos-productos/${id}`, {
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

export default { deleteProductos,postProductos,updateProductos,getProductos };