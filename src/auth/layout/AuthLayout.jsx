import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 2 }}
    >
      <Grid
        item
        className="box-shadow animate__animated animate__fadeIn animate__faster"
        xs={12}
        md={5}
        sx={{ backgroundColor: "white", borderRadius: 2, padding: 3 }}
      >
        <Typography variant="h5">{title}</Typography>
        {children}
      </Grid>
    </Grid>
  );
};
