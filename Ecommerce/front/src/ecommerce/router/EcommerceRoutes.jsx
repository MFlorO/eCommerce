import { Navigate, Route, Routes } from "react-router-dom";
import { Detalle, Home, LandingPage, Search } from "../page";
import EcommerceLayout from "../layout/EcommerceLayout";



const EcommerceRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<EcommerceLayout />} />

      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/detalle" element={<Detalle /> } />
      <Route path="/search" element={<Search />} />

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default EcommerceRoutes;