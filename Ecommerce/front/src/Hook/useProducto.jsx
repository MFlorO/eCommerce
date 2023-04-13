import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductoID } from '../redux/slice/admin/thunks';


const useProducto = (codigo) => {

  const dispatch = useDispatch()
  
  const { producto, status } = useSelector( state => state.admin)

  useEffect(() => {
    if(codigo) dispatch(getProductoID(codigo))
  }, [ codigo, dispatch ])


  return producto
}

export default useProducto;