import { AppTheme } from "~/theme";
import { AppRouterPrincipal } from "~/router";

function EccomerceApp() {
  return (
    <div className="App">
      <AppTheme>
        <AppRouterPrincipal />
      </AppTheme>
    </div>
  );
}

export default EccomerceApp;
