import React from "react";
import Footer from "../../modules/Shared/Footer";
import { default_theme } from "../../modules/Shared/theme";
import {ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

export default function Volunteer() {
    return (
    <ThemeProvider theme={default_theme}>
        <CssBaseline />
        <main>
            <box sx={{
          pt: 8,
          pb: 6}}>
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
            </box>
        </main>
        <Footer/>
    </ThemeProvider>
    
    )
}