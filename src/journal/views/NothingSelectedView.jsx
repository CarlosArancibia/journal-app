import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ minHeight: "calc(100vh - 115px)", backgroundColor: "primary.main", borderRadius: 3 }}
    >
      <Grid item>
        <StarOutline sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item>
        <Typography sx={{ color: "white" }} variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
