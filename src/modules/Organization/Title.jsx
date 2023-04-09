import { Box, Typography } from "@mui/material";
import { LineBox } from "../shared/components/LineBox";

export default function Title() {
  return (
    <LineBox>
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          marginRight: "25px",
        }}
      >
        <Typography
          component="h1"
          fontFamily="Nunito"
          align="left"
          color="#1E1E1E"
          fontSize="60px"
          gutterBottom
          fontWeight="800"
        >
          СТВОРИТИ ПОДІЮ
        </Typography>
      </Box>
    </LineBox>
  );
}
