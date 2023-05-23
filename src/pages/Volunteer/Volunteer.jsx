import React from "react";
import Footer from "../../modules/shared/components/Footer";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { LineBox } from "../../modules/shared/components/LineBox";

export default function Volunteer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const events = [
    {
      eventName: "Event 1",
      image: "image1.jpg",
      eventDescribe: "Description 1",
      shortEventDescribe: "Short Description 1",
    },
    {
      eventName: "Event 2",
      image: "image2.jpg",
      eventDescribe: "Description 2",
      shortEventDescribe: "Short Description 2",
    },
    {
      eventName: "Event 3",
      image: "image3.jpg",
      eventDescribe: "Description 3",
      shortEventDescribe: "Short Description 3",
    },
  ];

  const dialog = events.map((event) => (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title"></DialogTitle>
      <DialogContent>
        <CardMedia component="img" height="250" image={event.image} />
        <Typography
          gutterBottom
          variant="h4"
          fontWeight="700"
          fontFamily="Nunito"
          textAlign="center"
        >
          {event.eventName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="500"
          fontFamily="Nunito"
          fontSize="16px"
        >
          {event.eventDescribe}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  ));

  const card = events.map((event) => (
    <Card
      style={{
        borderRadius: 10,
      }}
      sx={{
        maxWidth: 348,
        maxHeight: 645,
        marginBottom: 5,
        marginTop: 5,
        marginRight: 2,
        marginLeft: 2,
      }}
    >
      <CardMedia component="img" height="160" image={event.image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          fontWeight="700"
          fontFamily="Nunito"
        >
          {event.eventName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="500"
          fontFamily="Nunito"
        >
          {event.shortEventDescribe}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          style={{
            width: 174,
            background:
              "linear-gradient(313deg , rgba(62,165,207,1) 0%, rgba(134,95,192,1) 100%)",
            borderRadius: 8,
            boxShadow: "0 0 6px 2px rgba(255, 105, 135, .2)",
            color: "white",
            height: 44,
            padding: "0 10px",
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Nunito",
          }}
          variant="outlined"
          size="small"
          color="inherit"
        >
          Волонтерити
        </Button>
        <Button
          onClick={handleClickOpen}
          style={{
            width: 174,
            background:
              "linear-gradient(313deg , rgba(62,165,207,1) 0%, rgba(134,95,192,1) 100%)",
            borderRadius: 8,
            boxShadow: "0 0 6px 2px rgba(255, 105, 135, .2)",
            color: "white",
            height: 44,
            padding: "0 10px",
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Nunito",
          }}
          variant="outlined"
          size="small"
          color="inherit"
        >
          Інформація
        </Button>
      </CardActions>
    </Card>
    
  ));

  return (
    <Box>
      <LineBox>
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            marginRight: "25px",
          }}
        >
          <Typography
            component="h1"
            fontFamily="Nunito"
            align="left"
            color="#1E1E1E"
            fontSize="60px"
            gutterBottom
            fontWeight="800"
          >
            ВОЛОНТЕРСТВО ЧЕКАЄ НА ТЕБЕ!
          </Typography>
        </Box>
      </LineBox>
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {card}
      </Box>
      <Box>{dialog}</Box>
      <Footer />
    </Box>
  );
}
