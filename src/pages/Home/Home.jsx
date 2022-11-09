import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link } from "react-router-dom";
import { MyButton } from "../../modules/shared/components/For_All.styled";
import Footer from "../../modules/shared/components/Footer";
import { TitlePhotos } from "../../modules/home/components/constants/Photos";
import "../../index.css";

export default function Home() {
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
            fontFamily="Nunito"
            align="center"
            color="text.primary"
            fontSize="75px"
            gutterBottom
            fontWeight="700"
          >
            ВІДКРИЙ СВІТ ВОЛОНТЕРСТВА!
          </Typography>
          <Typography
            fontFamily="Nunito"
            variant="h1"
            align="center"
            color="text.secondary"
            fontSize="30px"
            paragraph
            fontWeight="450"
          >
            Сотні можливостей та однодумців вже чекають на тебе
          </Typography>

          <Stack>
            <Stack spacing={2} alignItems="center">
              <Box sx={{ pt: 8, pb: 6 }}>
                <ImageList variant="masonry" cols={5} gap={8}>
                  {TitlePhotos.map((item) => (
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
              justifyContent="center"
            >
              <MyButton variant="contained">
                <Link
                  to={`/Volunteer`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Волонтерити
                </Link>
              </MyButton>
              <MyButton variant="contained">
                <Link
                  to={`/Organization`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Організовувати
                </Link>
              </MyButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
