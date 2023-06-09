import { getStatus, getCategorias, postCatgorias, updateCatgorias, deleteCategorias, postCategoriaProductoId, putCategoriaProductoId,
    getProductos, getProducto, postProducto, postModeloProductoId, deleteProducto, 
    deleteModelo, updateModeloID
    
 } from "./adminSlice"


export const startGetTodasCategorias = () => {
    return async( dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias')

        const { ok, status, categorias } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getCategorias(categorias) )
    }
}


export const PostCategorias = (body) => {

    const {nombre} = body;
    
    return async( body, dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias', {
            method: 'POST',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                nombre: nombre,
              })
        })

        const data = await response.json()

        const { status } = data

        if ( !data.ok ) return await dispatch(getStatus({status}));

        await dispatch(postCatgorias(data))
        await dispatch(getStatus(data))
    }
}


export const UpdateCategorias = (body) => {

    const {id, nombre} = body;
    
    return async( body , dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias', {
            method: 'PUT',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                nombre: nombre,
                id: id
              })
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(updateCatgorias(data))
    }
}


export const DeleteCategorias = (body) => {

    const { id } = body;
    
    return async( body , dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias', {
            method: 'DELETE',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                id: id
              })
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(deleteCategorias(data));
    }
}


export const PostCategoriaProductoId = (body, params) => {

    const { codigo } = params  //codigo de producto
    const { id } = body;

    return async( body, dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/categorias/${codigo.toUpperCase()}`, {
            method: 'POST',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                id: id
              }),
            params: JSON.stringify({codigo: codigo})
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(postCategoriaProductoId(data))
    }
}

export const UpdateCategoriaProductoId = (body, params) => {

    const { codigo } = params  //codigo de producto
    const { id } = body;

    console.log(id)

    return async( body, dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/categorias/${codigo.toUpperCase()}`, {
            method: 'PUT',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                id: id
              }),
            params: JSON.stringify({codigo: codigo})
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(putCategoriaProductoId(data))
    }
}


export const startGetTodosProductos= (query) => {

    const { q } = query

    return async( dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/productos?q=${q}`)

        const { ok, status, productos } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getProductos(productos) )
    }

}


export const getProductoID = (codigo) => {
    return async( dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/productos/Productoid/${codigo}`)

        const { ok, status, productoId } = await response.json()

        if ( !ok ) return dispatch( status );

        await dispatch( getProducto(productoId) )
    }
}


export const PostProducto = (body) => {

    const {codigo, nombre , precio, descripcion, imagen, fechaPublicacion, puntaje, oferta } = body;
    
    return async( body, dispatch ) => {

        const response = await fetch('http://localhost:3001/api/productos', {
            method: 'POST',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                codigo: codigo,
                nombre: nombre,
                precio: precio,
                descripcion: descripcion,
                imagen: imagen,
                fechaPublicacion: fechaPublicacion,
                puntaje: puntaje, 
                oferta: oferta
              })
        })

        const data = await response.json()

        const { status } = data

        if ( !data.ok ) return await dispatch(getStatus({status}));

        await dispatch(postProducto(data))
        await dispatch(getStatus(data))
    }
}


export const PostModeloProductoId = (body, params) => {

    const { codigo } = params  //codigo de producto
    const { color, talle, stock } = body;


    return async( body, dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/modelos/${codigo.toUpperCase()}`, {
            method: 'POST',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                color: color,
                talle: talle,
                stock: stock,
              }),
            params: JSON.stringify({codigo: codigo})
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(postModeloProductoId(data))
    }

}



export const DeleteProducto = (body) => {

    const { codigo } = body;
    
    return async( body , dispatch ) => {

        const response = await fetch('http://localhost:3001/api/productos', {
            method: 'DELETE',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                codigo: codigo
              })
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(deleteProducto(data));  
    }
}



export const DeleteModelo = (body) => {

    const { id } = body;
    
    return async( body , dispatch ) => {

        const response = await fetch('http://localhost:3001/api/modelos', {
            method: 'DELETE',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                id: id
              })
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(deleteModelo(data));  
    }
}


export const UpdateModeloID = (body, params) => {
    
    const { id, idMV } = params;  //id modelo     idMV modelovariante
    const { color, talle, stock } = body;
    
    return async( body , dispatch ) => {

        const response = await fetch(`http://localhost:3001/api/modelos/${id}/${idMV}`, {
            method: 'PUT',
            mode: 'cors', 
            headers:{ 'Content-Type': 'application/json'  },
            body: JSON.stringify({
                id: id,
                color: color,
                idMV: idMV,
                talle: talle,
                stock: stock
              }),
            params: JSON.stringify({
                id: id, 
                idMV: idMV
            })
        })

        const data = await response.json()

        if ( !data.ok ) return console.log(data.status);

        await dispatch(updateModeloID(data))       
    }
}


