import Typography from "@mui/material/Typography";


export default function Title() {
    return (
        <div>
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
      </div>
    );
  }