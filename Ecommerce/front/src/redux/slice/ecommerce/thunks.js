import { getProductos, getProducto, getCategorias } from "./ecommerceSlice"



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



export const startGetTodasCategorias = () => {
    return async( dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias')

        const { ok, status, categorias } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getCategorias(categorias) )
    }
}
