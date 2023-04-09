import * as React from "react";
import Box from "@mui/material/Box";
import Footer from "../../modules/shared/components/Footer";
import Title from "../../modules/Home/Components/Title";
import Buttons from "../../modules/Home/Components/Buttons";
import PhotoLayout from "../../modules/Home/Components/PhotoLayout";


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
