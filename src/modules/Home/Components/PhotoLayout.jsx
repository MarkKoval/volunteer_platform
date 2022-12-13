import { Grid,Box } from "@mui/material";

export default function PhotoLayout() {
  return (
    <div>
      <Grid container paddingTop={10} justifyContent="center">
        <Grid xs={2}>
          <Grid>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "red",
              }}
            />
          </Grid>
          <Grid>
            <Box
              sx={{
                width: "100%",
                height: 500,
                backgroundColor: "yellow",
              }}
            />
          </Grid>
        </Grid>
        <Grid xs={3}>
          <Box
            sx={{
              width: "100%",
              height: 800,
              backgroundColor: "blue",
            }}
          />
        </Grid>
        <Grid xs={3}>
          <Box
            sx={{
              width: "100%",
              height: 800,
              backgroundColor: "green",
            }}
          />
        </Grid>
        <Grid xs={2}>
          <Grid>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "red",
              }}
            />
          </Grid>
          <Grid>
            <Box
              sx={{
                width: "100%",
                height: 500,
                backgroundColor: "yellow",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
