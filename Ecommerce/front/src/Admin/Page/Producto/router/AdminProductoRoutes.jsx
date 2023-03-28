import { Navigate, Route, Routes } from "react-router-dom";
import { CrearProducto, ModelosProductos } from "../components";
import Productos from "../Productos";




const AdminProductoRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Productos />}/>
      <Route path="/crearProducto" element={<CrearProducto />}/>
      <Route path="/crearModelo/:id" element={<ModelosProductos />}/>

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/dashboard/admin/productos" />}/>
    </Routes>
  )
}

export default AdminProductoRoutes;