import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Footer from "../../modules/shared/components/Footer";
import { LineBox } from "../../modules/shared/components/LineBox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

const handleSubmit = (event) => {
  event.preventDefault();
  // handle form submission here
};

export default function Test() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "65%",
            backgroundImage:
              "linear-gradient(180deg, rgba(191,198,227,0) 0%, rgba(191,198,227,1) 20%, rgba(191,198,227,1) 80%, rgba(191,198,227,0) 100%)",
            justifyContent: "center",
            display: "flex",
            borderRadius: "25px",
            marginTop: "25px",
            marginBottom: "25px",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <Stack
            spacing={5}
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexFlow: "row",
            }}
          >
            <Box>
              <Stack>
                <Typography
                  component="h1"
                  fontFamily="Nunito"
                  align="center"
                  color="#1E1E1E"
                  fontSize="25px"
                  gutterBottom
                  fontWeight="800"
                  marginBottom="15px"
                >
                  РЕЄСТРУЙТЕ ПОДІЮ ТУТ!
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                  marginBottom={2}
                >
                  <TextField
                    required
                    id="outlined-required"
                    label="Назва події"
                    defaultValue="Велосотка 2022"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Організатор"
                    defaultValue="UnionRun"
                  />
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2} justifyContent="center">
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                />
              </Stack>
            </Box>

            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: "yellow",
              }}
            />
          </Stack>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column">
        <form onSubmit={handleSubmit}>
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>

      <Footer />
    </Box>
  );
}
