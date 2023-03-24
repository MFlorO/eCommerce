import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";



const Footer = () => {
  return (
    <Box sx={{display:'flex', width: "100%", height:'4rem', alignSelf:'end', justifyContent:'center', mt:'2rem'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href=""> Your Website </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
