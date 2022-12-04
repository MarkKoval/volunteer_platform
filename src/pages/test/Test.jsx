import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../../index.css";
import { LineBox } from "../../modules/test/components/LineBox";
import Photos from "../../modules/home/components/Photos";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function Test() {
  return (
    <Box>
      <LineBox
        display="flex"
        vertical-align="middle"
        justifyContent="center"
        align-items="center"
      >
        <Box>
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
      <Box
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 2.1500000000000001px, transparent 2.1500000000000001px), radial-gradient(#ffffff 2.1500000000000001px, HSLA(228,39%,82%,1) 2.1500000000000001px)",
          backgroundSize: "46px 46px",
          backgroundPosition: "0 10px,23px 33px",
        }}
      >
        <Photos />

        <Stack
          sx={{ pt: 6 }}
          direction="row"
          spacing={20}
          justifyContent="center"
        >
          <Button
            variant="contained"
            style={{
              width: 220,
              background:
                "linear-gradient(313deg , rgba(62,165,207,1) 0%, rgba(134,95,192,1) 100%)",
              border: 0,
              borderRadius: 8,
              boxShadow: "0 0 6px 2px rgba(255, 105, 135, 0.3)",
              color: "white",
              height: 48,
              padding: "0 30px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            <Link
              to={`/Volunteer`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Волонтерити
            </Link>
          </Button>
          <Button
            variant="contained"
            style={{
              width: 220,
              background:
                "linear-gradient(313deg , rgba(62,165,207,1) 0%, rgba(134,95,192,1) 100%)",
              borderRadius: 8,
              boxShadow: "0 0 6px 2px rgba(255, 105, 135, .2)",
              color: "white",
              height: 48,
              padding: "0 30px",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            <Link
              to={`/Organization`}
              style={{ textDecoration: "none", color: "white" }}
            >
              Організовувати
            </Link>
          </Button>
        </Stack>
        <Box
          sx={{ mt: 12, pt: 2, pb: 1 }}
          component="footer"
          style={{
            background:
              "radial-gradient(at 0% 100%, hsla(261,75%,79%,1) 0px, transparent 50%),\nradial-gradient(at 74% 100%, hsla(195,54%,66%,1) 0px, transparent 50%),\nradial-gradient(at 48% 100%, hsla(200,76%,63%,1) 0px, transparent 50%),\nradial-gradient(at 98% 100%, hsla(195,72%,71%,1) 0px, transparent 50%),\nradial-gradient(at 1% 100%, hsla(261,53%,59%,1) 0px, transparent 50%)",

            boxShadow: "0 0 0 0",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            color="text.secondary"
            fontSize="40px"
            paragraph
            fontWeight="750"
            marginTop="50px"
          >
            Footer
          </Typography>
          <Typography
            variant="h1"
            align="center"
            color="text.secondary"
            fontSize="15px"
            paragraph
            fontWeight="600"
          >
            Something here to give the footer a purpose!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}