import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto, CrearModelos, EditarModelo } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/crearProducto" element={<CrearProducto />}/>
      <Route path="/crearModelo/:id" element={<CrearModelos />}/>
      <Route path="/modificarModelo/:id/:idMV" element={<EditarModelo />}/>

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/productos" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;