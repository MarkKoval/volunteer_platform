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
          <CardMedia
            component="img"
            height="160"
            image="https://vseprobegi.org/img/user_25/2021_04_18_Run_the_World_Lviv_Half_Marathon.png"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              fontWeight="700"
              fontFamily="Nunito"
            >
              Run the World. Львівський напівмарфон
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="500"
              fontFamily="Nunito"
            >
              Коротка Інформація про цей забіг тири пири тири пири
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
      </Box>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <CardMedia
              component="img"
              height="250"
              image="https://vseprobegi.org/img/user_25/2021_04_18_Run_the_World_Lviv_Half_Marathon.png"
            />
            <Typography
              gutterBottom
              variant="h4"
              fontWeight="700"
              fontFamily="Nunito"
              textAlign="center"
            >
              Run the World. Львівський напівмарфон
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="500"
              fontFamily="Nunito"
              fontSize="16px"
            >
              Run the World - це щорічний львівський напівмарафон, який збирає
              любителів бігу з усієї України та навіть з-за кордону. Подія
              відбувається у квітні та є однією з найбільших бігових подій у
              західній частині країни. Учасники можуть вибрати дистанцію, яка
              підходить їхньому рівню фізичної підготовки, - 5 км, 10 км або
              напівмарафон на 21 км. Маршрут проходить через вулиці та вузькі
              вулички старовинного Львова, де бігуни можуть насолоджуватися
              красою міста та знайомитися з його історією. У день заходу на
              старті збирається велика кількість людей, які готові проявити свою
              фізичну витривалість та пройти обраний ними шлях. Всі учасники
              отримують спеціальний стартовий пакет, який містить футболку з
              логотипом заходу та інші корисні прикраси. Кожен, хто фінішує на
              події, отримує медаль та може почувати себе частиною великого
              спортивного свята. Всі результати учасників публікуються в
              Інтернеті, щоб кожен міг переглянути свої досягнення та порівняти
              їх з іншими бігунами. Run the World - це не тільки змагання, але й
              можливість зустріти нових людей, долучитися до спортивної
              спільноти та відчути радість перемоги. Ця подія доводить, що біг
              може бути не тільки корисним для здоров'я, але й дуже захоплюючим
              і незабутнім досвідом.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </div>

      <Footer />
    </Box>
  );
}
