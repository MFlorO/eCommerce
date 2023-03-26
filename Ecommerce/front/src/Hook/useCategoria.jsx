import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetTodasCategorias } from '~/redux/slice/admin/thunks';

const useCategoria = () => {

  const { categorias } = useSelector( state => state.admin)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetTodasCategorias(categorias))
  }, [])

  return (
    categorias
  )
}

export default useCategoria