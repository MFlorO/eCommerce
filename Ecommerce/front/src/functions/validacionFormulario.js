


//VALIDACION DEL FORMULARIO
const validacionFormulario = (input) => {

    let errores = {};
  
    if((!input.nombre)) errores.nombre = "Completar el campo nombre";

    if((input.nombre.length > 15)) errores.nombre = "El nombre no puede ser tan largo"
    
    return errores
  }

export default validacionFormulario;