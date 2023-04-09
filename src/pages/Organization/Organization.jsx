import { Box } from "@mui/material";
import * as React from "react";
import Title from "../../modules/Organization/Title";
import { Background } from "../../modules/Organization/Background";
import Form from "../../modules/Organization/Form";
import Footer from "../../modules/shared/components/Footer";

export default function Test() {
  return (
    <Box>
      <Title />
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Background>
          <Form />
        </Background>
      </Box>
      <Footer />
    </Box>
  );
}
