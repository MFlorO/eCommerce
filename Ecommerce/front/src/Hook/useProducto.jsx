import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductoID } from '../redux/slice/admin/thunks';


const useProducto = (codigo) => {

  const { producto, status } = useSelector( state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    if(codigo) dispatch(getProductoID(codigo))
  }, [])


  return producto
}

export default useProducto;