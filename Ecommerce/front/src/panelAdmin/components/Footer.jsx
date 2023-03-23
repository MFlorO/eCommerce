import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import { drawerWidth } from "../layout/AdminLayOut";

// const Box = styled()(({ theme }) => ({
//   // zIndex: theme.zIndex.drawer - 10,
//   // width: "100wv",
//   // marginLeft: drawerWidth,
//   width: `calc(100% - (${drawerWidth}px + 2rem))`,
// }));

const Footer = () => {
  return (
    <Box sx={{width:`100% - (${drawerWidth}px))`, height:'3rem' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
