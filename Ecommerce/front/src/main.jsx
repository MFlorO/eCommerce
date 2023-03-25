import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import EccomerceApp from "./EcommerceApp";
import "./styles.css";

import { Provider } from "react-redux";
import { store } from "~/redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>    {/* Redux va aca porque queremos que las rutas también puedan acceder al store global */}
      <BrowserRouter>
        <EccomerceApp />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
