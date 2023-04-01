import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto, CrearModelos, EditarModelo, AgregarCategoria } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/crearProducto" element={<CrearProducto />}/>
      <Route path="/crearModelo/:codigo" element={<CrearModelos />}/>
      <Route path="/modificarModelo/:id/:idMV" element={<EditarModelo />}/>
      <Route path="/categoria/:codigo" element={<AgregarCategoria /> }/>
      
      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/productos" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;