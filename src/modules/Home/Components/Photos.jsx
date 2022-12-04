import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { TitlePhotos } from "./constants/Photos";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function Photos() {
  return (
    <div>
      <Stack alignItems="center">
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
    </div>
  );
}
