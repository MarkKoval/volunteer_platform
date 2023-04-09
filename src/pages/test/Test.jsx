import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "../../modules/shared/components/Footer";
import { LineBox } from "../../modules/shared/components/LineBox";
import { useForm } from "react-hook-form";
import { Grid, OutlinedInput, Paper, styled } from "@mui/material";

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
            width: "60%",
            backgroundImage:
              "linear-gradient(180deg, rgba(191,198,227,0) 0%, rgba(191,198,227,1) 8%, rgba(191,198,227,1) 95%, rgba(191,198,227,0) 100%)",
            justifyContent: "center",
            display: "flex",
            borderRadius: "25px",
            marginTop: "45px",
            marginBottom: "25px",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={6} md={5}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="First name"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
              </Grid>
              <Grid item xs={6} md={5}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="Last name"
                  {...register("Last name", { required: true, maxLength: 100 })}
                />
              </Grid>
              <Grid item xs={6} md={5}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </Grid>
              <Grid item xs={6} md={5}>
                <OutlinedInput
                  fullWidth
                  type="tel"
                  placeholder="Mobile number"
                  {...register("Mobile number", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="Event name"
                  {...register("Event name", {})}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="datetime"
                  placeholder="Event date"
                  {...register("Event date", {})}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="Event category"
                  {...register("Event category", {})}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="number"
                  placeholder="Number of people"
                  {...register("Number of people", {})}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="text"
                  placeholder="About event"
                  {...register("About event", {})}
                />
              </Grid>

              {/* Not work multiple */}

              <Grid item xs={6} md={6}>
                <OutlinedInput
                  fullWidth
                  type="file"
                  multiple
                  accept="application/pdf, image/png"
                  {...register("Photos", {})}
                />
              </Grid>
              <Grid item xs={6} md={12}>
                <OutlinedInput fullWidth type="submit" />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
