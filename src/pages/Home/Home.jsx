import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import {MyButton} from '../../modules/Shared/For_All.styled';
import { itemData } from '../../modules/Home/Components/Home.Components';
import { default_theme } from '../../modules/Shared/theme';
import Footer from '../../modules/Shared/Footer';



export default function Home() {
    
    return (
    
    <ThemeProvider theme={default_theme}>
    <CssBaseline />
    <main>

      <Box
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
      <Footer/>
  </ThemeProvider>
)
}