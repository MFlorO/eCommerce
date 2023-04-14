import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetTodasCategorias } from '~/redux/slice/ecommerce/thunks';


const useCategorias = () => {

  const { categorias, status } = useSelector( state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodasCategorias(categorias))
  }, [])


  return categorias
}

export default useCategorias