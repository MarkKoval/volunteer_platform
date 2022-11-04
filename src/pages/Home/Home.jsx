import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from "@mui/material/styles";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import {MyButton,FooterBox} from '../../modules/For_All/For_All'

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

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

export default function Home() {
    
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

          <Stack>
      <Stack spacing={2} alignItems="center" marginTop={5}>
      <Box sx={{pt: 8,
          pb: 6,}}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
        </Box>
      </Stack>
      <Stack
            sx={{ pt: 6 }}
            direction="row"
            spacing={20}
            justifyContent="center">
            <MyButton variant="contained">
              <Link to={`/Volunteer`} style={{textDecoration:"none", color:"white"}}>Волонтерити</Link>
            </MyButton>
            <MyButton variant="contained">
              <Link to={`/Organization`} style={{textDecoration:"none", color:"white"}}>Організовувати</Link>
            </MyButton>
          </Stack>
    </Stack>
        </Container>
      </Box>
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