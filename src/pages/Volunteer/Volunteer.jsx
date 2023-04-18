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

  const card = card.map(
    (eventName, image, eventDescribe, shortEventDescribe, index) => (
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
        key={index}
      >
        <CardMedia component="img" height="160" image={card.image} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="700"
            fontFamily="Nunito"
          >
            {card.eventName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight="500"
            fontFamily="Nunito"
          >
            {card.shortEventDescribe}
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
    )
  );

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
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <CardMedia component="img" height="250" image={card.image} />
            <Typography
              gutterBottom
              variant="h4"
              fontWeight="700"
              fontFamily="Nunito"
              textAlign="center"
            >
              {card.eventName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="500"
              fontFamily="Nunito"
              fontSize="16px"
            >
              {card.eventDescribe}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </Box>
  );
}
