import { useDispatch } from "react-redux";
import { firebaseAuth } from "../../firebase/config";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { startLogout } from "../../store/auth/thunks";

export const Navbar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar>
          <IconButton color="inherit" sx={{ display: { sm: "none" }, mr: 2 }}>
            <MenuOutlined />
          </IconButton>

          <Grid container justifyContent={"space-between"} alignItems={"center"} flexWrap={"nowrap"}>
            <Typography variant="h6">JournalApp</Typography>
            <IconButton color={"danger"} onClick={onLogout}>
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
