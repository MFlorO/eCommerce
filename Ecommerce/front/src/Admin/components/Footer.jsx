import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";



const Footer = () => {
  return (
    <Box sx={{display:'flex', height:'4rem', alignSelf:'end', justifyContent:'center', mt:'2rem'}} width={{xs:'80vw'}}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href=""> Your Website </Link>
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
