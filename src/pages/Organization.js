import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import styled from '@emotion/styled';
import './fonts.css';
import './default.css';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { width } from '@mui/system';

const FooterBox = styled(Box)({
  background: 'linear-gradient(to bottom, #ffea98, #fbdd81, #f8cf6a, #f5c153, #f3b23c, #f2ab31, #f2a526, #f19e18, #f19e18, #f19e18, #f19e18, #f19e18)',
  boxShadow: '0 0 0 0',
});

const MyButton = styled(Button)({
    background: 'linear-gradient(to right bottom, #dc9104, #e09c1a, #e4a729, #e7b137, #ebbc44)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 0 6px 2px rgba(255, 105, 135, .2)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    fontSize: '18px',
    fontFamily: 'Nunito',
    fontWeight: 700,
  });

const back = createTheme({
    palette: {
        type: 'light',
        primary: {
        main: '#ff8c00',
        light: '#fd9a20',
        dark: '#a45b00',
        contrastText: '#ffffff',
      },
        secondary: {
        main: '#ffffff',
      },
        background: {
        default: '#ffea98',
      },
    },
  });

  function valuetext(value) {
    return `${value}`;
  }

export default function Organization() {
    
    return (
    
    <ThemeProvider theme={back}>
    <CssBaseline />
    <main>

      <Box
        sx={{
          bgcolor: '#ffea98',
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
      </Box>

      <Box sx={{ flexGrow: 1,'& .MuiTextField-root': { m: 1, width: '25ch' } }}>
      <h1 align="left">Про захід</h1>
      <Grid container spacing={2} columns={16}>
        <Grid xs={6}>
        <TextField required fullWidth
          id="outlined-required"
          label="Назва заходу"
          defaultValue="Назва заходу"
          />
          <TextField required fullWidth
          id="outlined-required"
          label="Посилання на форму"
          defaultValue="Посилання на форму"
          />
          <TextField required
          id="outlined-required"
          label="Номер телефону"
          defaultValue="+380345345243"
          />
          <TextField required
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
          style={{width:'55ch'}}
        />
        
        </Grid>
      </Grid>
    </Box>

 <Container align="center" component="container" sx={{width:800,'& .MuiTextField-root': { m: 1, width: '25ch' }}}>
        
        <Box>
          
        </Box>
        <Box>
          
        </Box>
      </Container>

      </main>


      <FooterBox sx={{ p: 0.1 }} component="footer">
      <Typography
         variant="h1" 
         align="center" 
         color="text.secondary"
         fontSize="40px"
         paragraph
         fontWeight="750"
         marginTop="50px">
          Footer
        </Typography>
        <Typography
          variant="h1" 
          align="center" 
          color="text.secondary"
          fontSize="15px"
          paragraph
          fontWeight="600">
          Something here to give the footer a purpose!
        </Typography>
      </FooterBox>
  </ThemeProvider>
)
}
