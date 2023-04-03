import { Navigate, Route, Routes } from "react-router-dom";
import { Detalle, Home, LandingPage, Search, Contacto, ComoComprar, Devoluciones, Talles } from "../page";
import EcommerceLayout from "../layout/EcommerceLayout";




const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<EcommerceLayout />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalle" element={<Detalle /> } />
      <Route path="/search" element={<Search />} />
    
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