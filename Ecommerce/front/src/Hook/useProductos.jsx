import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetTodosProductos } from '~/redux/slice/admin/thunks';


const useProductos = () => {
    const { productos } = useSelector( state => state.admin)

    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(startGetTodosProductos(productos))
    }, [])
  
    return (
       productos
    )
}

export default useProductos;