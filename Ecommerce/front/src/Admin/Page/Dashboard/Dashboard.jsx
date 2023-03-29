import { AdminLayOut } from "../../layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


import OrdenesRecientes from "./OrdenesRecientes";
import Graficos from "./Graficos";

const Dashboard = () => {
  return (
    <AdminLayOut>
      <Container maxWidth="lg">
        <Grid container spacing={3}>

          {/* Recent Deposits */}
          <Grid item xs={12} md={4} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}
              DEPOSITS
            </Paper>
          </Grid>

          {/* Recent Deposits */}
          <Grid item xs={12} md={4} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}
              DEPOSITS
            </Paper>
          </Grid>

          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              {/* <Deposits /> */}
              DEPOSITS
            </Paper>
          </Grid>

          <Grid item xs={12} >
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Graficos />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <OrdenesRecientes />
            </Paper>
          </Grid>
          
        </Grid>

        {/* <Copyright sx={{ pt: 4 }} /> */}
      </Container>
    </AdminLayOut>
  );
};

export default Dashboard;
