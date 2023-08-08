import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main" }}
    >
      <CircularProgress color="warning" />
    </Grid>
  );
};
