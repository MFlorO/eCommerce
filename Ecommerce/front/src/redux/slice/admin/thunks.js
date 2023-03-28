import { getCategorias, postCatgoria, updateCatgoria, deleteCategoria, getProductos, getProducto } from "./adminSlice"


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

        if ( !data.ok ) return console.log(data.status);

        await dispatch(postCatgoria(data))
        await dispatch(startGetTodasCategorias())
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

        await dispatch(updateCatgoria(data))
        await dispatch(startGetTodasCategorias())        
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

        await dispatch(deleteCategoria(data));
        
        startGetTodasCategorias(); 
    }
}


export const startGetTodosProductos= () => {
    return async( dispatch ) => {

        const response = await fetch('http://localhost:3001/api/productos')

        const { ok, status, productos } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getProductos(productos) )
    }
}


export const getProductoID = (codigo) => {
    return async( dispatch ) => {

        console.log('codigo', codigo)

        const response = await fetch(`http://localhost:3001/api/productos/Productoid/${codigo}`)

        const { ok, status, productoId } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getProducto(productoId) )
    }
}

