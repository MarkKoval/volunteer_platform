import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Footer from "../../modules/shared/components/Footer";
import { LineBox } from "../../modules/shared/components/LineBox";
import Stack from "@mui/material/Stack";
import { useForm } from "react-hook-form";
import { Input, OutlinedInput } from "@mui/material";

export default function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
            width: "58%",
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
            <form onSubmit={handleSubmit(onSubmit)} sx={{
              marginBottom:"20px",
              marginTop: "20px",
              justifyContent: "center",
            }}>
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="First name"
                {...register("First name", { required: true, maxLength: 80 })}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true, maxLength: 100 })}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="Event name"
                {...register("Event name", {})}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="datetime"
                placeholder="Event date"
                {...register("Event date", {})}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="Event category"
                {...register("Event category", {})}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="number"
                placeholder="Number of people"
                {...register("Number of people", {})}
              />
              <OutlinedInput
                sx={{
                  marginBottom: "20px",
                  marginTop: "20px",
                  marginLeft: "20px",
                  marginRight: "20px",
                }}
                type="text"
                placeholder="About event"
                {...register("About event", {})}
              />

              <OutlinedInput sx={{

              }} type="submit" />
            </form>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
