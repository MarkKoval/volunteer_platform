import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../../modules/shared/components/Footer";
import Title from "../../modules/home/components/Title";
import Photos from "../../modules/home/components/Photos";
import Buttons from "../../modules/home/components/Buttons";

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          pt: 16,
          pb: 8,
        }}
      >
        <Title />
        <Photos />
        <Buttons />
      </Box>
      <Footer />
    </Box>
  );
}