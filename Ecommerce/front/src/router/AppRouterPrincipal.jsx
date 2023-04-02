import { Navigate, Route, Routes } from "react-router-dom";
import { AdminRoutes } from "~/Admin";
import { EcommerceRoutes } from "~/ecommerce";




const AppRouterPrincipal = () => {

  return (
    <Routes>
      <Route path="/*" element={<EcommerceRoutes />} />
      <Route path="/dashboard/admin/*" element={ <AdminRoutes /> } />
      {/* <Route path="/" element={<Navigate to="/" />} /> */}
    </Routes>
  );
};

export default AppRouterPrincipal;
