import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";



function AdminLayOut({ children }) {
  return (
      <Box
        sx={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "row", justifyContent: "space-between", 
         background: 'linear-gradient(#595959, #FFFFFF)'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: '20%', alignItems:'center' }} >
          <SideBar />
        </Box>

        <Box
          sx={{ minHeight: "100vh", width: '80%', display: "flex", flexDirection: "column", justifyContent: 'end', // alignItem: 'center'

          }}
        >
          <NavBar />

          {children}

          <Footer />
        </Box>
      </Box>
  );
}

export default AdminLayOut;
