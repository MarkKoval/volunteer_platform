import { LineBox } from "../../shared/components/LineBox";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";


export default function Title() {
  return (
    <div>
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
            ВІДКРИЙ СВІТ ВОЛОНТЕРСТВА!
          </Typography>
          <Typography
            fontFamily="Nunito"
            variant="h1"
            align="left"
            fontSize="30px"
            paragraph
            fontWeight="600"
            color="#1E1E1E"
          >
            Сотні можливостей та однодумців вже чекають на тебе
          </Typography>
        </Box>
        <Box
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "100%",
            backgroundColor: "black",
            opacity: 1,
            backgroundImage:
              "radial-gradient(circle, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 100%)",
          }}
        >
          <Box
            style={{
              marginLeft: "7px",
              marginTop: "15px",
              width: "280px",
              height: "280px",
              borderRadius: "100%",
              backgroundColor: "black",
              opacity: 1,
              backgroundImage:
                "repeating-linear-gradient(45deg, #bfc6e3 25%, transparent 25%, transparent 75%, #bfc6e3 75%, #bfc6e3), repeating-linear-gradient(45deg, #bfc6e3 25%, #000000 25%, #000000 75%, #bfc6e3 75%, #bfc6e3)",
              backgroundPosition: "0 0, 23px 23px",
              backgroundSize: "46px 46px",
            }}
          />
        </Box>
      </LineBox>
    </div>
  );
}
