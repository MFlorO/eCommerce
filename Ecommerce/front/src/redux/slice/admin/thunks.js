import { getCategorias, updateCatgoria } from "./adminSlice"


export const startGetTodasCategorias = () => {
    return async( dispatch ) => {

        const response = await fetch('http://localhost:3001/api/categorias')

        const { ok, status, categorias } = await response.json()

        if ( !ok ) return dispatch( status );

        dispatch( getCategorias(categorias) )

    }
}

export const UpdateCategorias = (body) => {

    console.log( 'body', body )
    
    return async( body , dispatch ) => {

        const response = await fetch
        .put('http://localhost:3001/api/categorias', {
            method: 'PUT',
            mode: 'cors', 
            headers:{
                'Content-Type': 'application/json'
              },
            body: body
        })

        console.log('body adentro', body)

        const data = await response.json()

        // if ( !data.ok ) return console.log(data.status);

        return dispatch(updateCatgoria(data))

        
    }
}