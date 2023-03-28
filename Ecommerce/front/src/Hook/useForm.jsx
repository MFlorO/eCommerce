import { useEffect, useState } from 'react';


export const useForm = ( initialForm = {}, validate ) => {
  
    const [ formState, setFormState ] = useState( initialForm );

    const [ errorFormValid, seterrorFormValid ] = useState( {} );

    const formValid = () => (Object.keys(errorFormValid).length > 0) ? true : false

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        if(name === "idCategoria"){

            if(!formState.idCategoria.includes(value)){
      
              setFormState({ ...formState, 
                 [name] : [...formState.idCategoria, value] 
              });
            }
             
          }else{

            setFormState({ ...formState, [ name ]: value });
    
            seterrorFormValid(validate ({...formState, [ name ]:value }));
          }
    }

    const onResetForm = () => setFormState( initialForm );
    

    return {
        ...formState,
        formState,
        onInputChange,
        errorFormValid,
        onResetForm,
        formValid
    }
}   