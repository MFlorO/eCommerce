import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetTodosProductos } from '~/redux/slice/admin/thunks';


const useProductos = () => {

    const { productos } = useSelector( state => state.admin)

    const [productosCopia, setproductosCopia] = useState(productos)

    const dispatch = useDispatch()

    useEffect(() => {
      setproductosCopia(productos)
    }, [productosCopia, productos])
  
    useEffect(() => {
      dispatch(startGetTodosProductos())
    }, [])
  
    return {
       productos, 
       productosCopia,
       setproductosCopia
    }
}

export default useProductos;