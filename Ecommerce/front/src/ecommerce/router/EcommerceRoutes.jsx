import { Navigate, Route, Routes } from "react-router-dom";
import { Detalle, LandingPage, Tienda, Contacto, ComoComprar, Devoluciones, Talles } from "../page";
import EcommerceLayout from "../layout/EcommerceLayout";




const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<EcommerceLayout />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/detalle" element={<Detalle /> } />
      <Route path="/tienda" element={<Tienda />} />
    
      <Route path="/talles" element={<Talles />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/comocomprar" element={<ComoComprar />} />
      <Route path="/devoluciones" element={<Devoluciones />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default EcommerceRoutes;