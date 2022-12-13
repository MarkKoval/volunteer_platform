import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../../modules/shared/components/Footer";
import Title from "../../modules/home/components/Title";
import Buttons from "../../modules/home/components/Buttons";
import PhotoLayout from "../../modules/home/components/PhotoLayout";


export default function Home() {
  return (
    <Box>
      <Title />
      <PhotoLayout />
      <Buttons />
      <Footer />
    </Box>
  );
}
