import { Navigate, Route, Routes } from "react-router-dom";

// import { Loading } from "~/ui";

import AdminRoutes from "~/panelAdmin/router/AdminRoutes";




const AppRouterPrincipal = () => {

  return (
    <Routes>

      <Route path="/dashboard/admin/*" element={ <AdminRoutes /> } />

    </Routes>
  );
};

export default AppRouterPrincipal;
