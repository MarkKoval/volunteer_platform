import React from "react";
import Footer from "../../modules/shared/components/Footer";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export default function Volunteer() {
  return (
    <box
      sx={{
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="s">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="text.primary"
          fontSize="75px"
          gutterBottom
          fontWeight="700"
        >
          ВІДКРИЙ СВІТ ВОЛОНТЕРСТВА!
        </Typography>
        <Typography
          variant="h1"
          align="center"
          color="text.secondary"
          fontSize="30px"
          paragraph
          fontWeight="300"
        >
          Сотні можливостей та однодумців вже чекають на тебе
        </Typography>
      </Container>
      <Footer />
    </box>
  );
}
