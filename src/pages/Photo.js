import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const FooterBox = styled(Box)({
    background: 'linear-gradient(to bottom, #ffea98, #fbdd81, #f8cf6a, #f5c153, #f3b23c, #f2ab31, #f2a526, #f19e18, #f19e18, #f19e18, #f19e18, #f19e18)',
    boxShadow: '0 0 0 0',
  });

const theme = createTheme({
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


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const MyButton = styled(Button)({
    background: 'linear-gradient(to right bottom, #dc9104, #e09c1a, #e4a729, #e7b137, #ebbc44)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 0 6px 2px rgba(255, 105, 135, .2)',
    color: 'white',
    height: 38,
    padding: '0 30px',
    fontSize: '14px',
    fontFamily: 'Nunito',
    fontWeight: 700,
  });

export default function Photo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <MyButton variant="contained">Main call to action</MyButton>
              <MyButton variant="contained">Secondary action</MyButton>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
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
  );
}