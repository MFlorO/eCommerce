import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayOut } from "../layout";



const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayOut />}/>

      {/* Ruta defecto */}
      <Route path="/" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default AdminRoutes;