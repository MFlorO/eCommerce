import { AppTheme } from "~/theme";
import { AppRouterPrincipal } from "~/router";
import { CssBaseline } from '@mui/material';

function EccomerceApp() {
  return (
    <div className="App">
      <AppTheme>
        <CssBaseline />
        <AppRouterPrincipal />
      </AppTheme>
    </div>
  );
}

export default EccomerceApp;
