import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { startGetTodosProductos } from '~/redux/slice/admin/thunks';


const useProductos = () => {

    const location = useLocation()

    const qSlice = location.search; 

    const q = qSlice.slice(3)

    useEffect(() => {
      dispatch(startGetTodosProductos({q}))
    }, [q])

    
    const { productos } = useSelector( state => state.admin)


    const [productosCopia, setproductosCopia] = useState(productos)

    const dispatch = useDispatch()

    useEffect(() => {
      setproductosCopia(productos)
    }, [productosCopia, productos])
  

  
    return {
       productos, 
       productosCopia,
       setproductosCopia
    }
}

export default useProductos;