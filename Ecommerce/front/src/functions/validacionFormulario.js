


//VALIDACION DEL FORMULARIO
export const validacionFormularioProducto = (input) => {

    let errores = {};

    if((!input.codigo)) errores.codigo = "Completar el campo codigo";
  
    if((!input.nombre)) errores.nombre = "Completar el campo nombre";
    if((input.nombre.length > 15)) errores.nombre = "El nombre no puede ser tan largo"

    if((!input.descripcion)) errores.descripcion = "Completar el campo descripción";

    if((!input.precio)) errores.precio = "Completar el campo precio";

    if((!input.imagen)) errores.imagen = "Completar el campo imagen";

    if((!input.fechaPublicacion)) errores.fechaPublicacion = "Completar el campo fecha de publicacion";

    if((!input.idCategoria.length < 0)) errores.idCategoria = "Elegir mínimo una categoría"
    
    return errores
  }


  export const validacionFormularioModelos= (input) => {

    let errores = {};

    if((!input.color)) errores.color = "Completar el campo color";
  
    if((!input.talle)) errores.talle = "Completar el campo talle";
    if((!input.stock)) errores.stock = "Completar el campo stock"

    
    return errores
  }



export const validacionFormularioCategoria = (input) => {

  let errores = {};

  if((!input.nombre)) errores.nombre = "Completar el campo nombre";
  if((input.nombre.length > 15)) errores.nombre = "El nombre no puede ser tan largo"
  
  return errores
};


