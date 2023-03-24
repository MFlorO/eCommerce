import { Route, Routes } from "react-router-dom";
import { AdminRoutes } from "~/Admin/";




const AppRouterPrincipal = () => {

  return (
    <Routes>
      <Route path="/dashboard/admin/*" element={ <AdminRoutes /> } />
    </Routes>
  );
};

export default AppRouterPrincipal;
