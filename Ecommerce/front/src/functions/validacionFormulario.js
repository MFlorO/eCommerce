


//VALIDACION DEL FORMULARIO
const validacionFormulario = (input) => {

    let errores = {};
  
    if((!input.nombre)){   
    errores.email = "Completar el campo nombre"
    }
    
    return errores
  }

export default validacionFormulario;