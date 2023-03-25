import { getCategorias } from "./adminSlice"


export const startGetCategorias = () => {
    return async( dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias')

        const { ok, status, categorias } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getCategorias(categorias) )

    }
}