import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Footer from "../../modules/shared/components/Footer";

export default function Organization() {
  return (
    <Box>
      <Box
        sx={{
          pt: 8,
          pb: 8,
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
      </Box>
      <Box align="center">
       <Box
        sx={{ flexGrow: 1, "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      >
        <Grid container spacing={2} columns={16}>
          <Grid xs={6}>
          <h1 align="center">Про захід</h1>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Назва заходу"
              defaultValue="Назва заходу"
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Посилання на форму"
              defaultValue="Посилання на форму"
            />
            <TextField
              required
              id="outlined-required"
              label="Номер телефону"
              defaultValue="+380345345243"
            />
            <TextField
              required
              id="outlined-required"
              label="Організатор"
              defaultValue="Організатор"
            />
          </Grid>
          <Grid xs={10}>
            <TextField
              multiline={true}
              rows={10}
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
              style={{ width: "55ch" }}
            />
          </Grid>
        </Grid>
      </Box> 
      </Box>
      
      <Footer />
    </Box>
  );
}
