import { SideBar } from "../components/SideBar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Box from "@mui/material/Box";

export const heightNavbar = 7

function AdminLayOut({ children }) {
  return (
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between",
         background: '#EBEAEA'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: '18%', alignItems:'center'}} >
          <SideBar />
        </Box>

        <NavBar />

        <Box
          sx={{ minHeight: "300vh", width: '82%', display: "flex", flexDirection: "column", justifyContent: 'space-between', // alignItem: 'center'
           mt:'7rem', p:'1rem'
          }}
        >

          <Box>
            {children}
          </Box> 

          <Footer />
        </Box>

      </Box>
  );
}

export default AdminLayOut;
