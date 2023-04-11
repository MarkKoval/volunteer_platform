import { Button, Grid, OutlinedInput, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} md={12}>
          <Typography
            fontFamily="Nunito"
            fontWeight="800"
            fontSize="36px"
            textAlign="center"
          >
            Про організатора
          </Typography>
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Ім'я
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Прізвище
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Електонна пошта
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="E-mail"
            {...register("Email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Номер телефону
          </Typography>
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
        <Grid item xs={6} md={10}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            textAlign="center"
          >
            Організатор події
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="Organization"
            {...register("Organization", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <Typography
            paddingTop="20px"
            fontFamily="Nunito"
            fontWeight="800"
            fontSize="36px"
            textAlign="center"
          >
            Про подію
          </Typography>
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Назва події
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="Event name"
            {...register("Event name", {})}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Дата проведення
          </Typography>
          <OutlinedInput
            fullWidth
            type="datetime"
            placeholder="Event date"
            {...register("Event date", {})}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Категорія
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="Event category"
            {...register("Event category", {})}
          />
        </Grid>
        <Grid item xs={6} md={5}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Кількість волонтерів
          </Typography>
          <OutlinedInput
            fullWidth
            type="number"
            placeholder="Number of people"
            {...register("Number of people", {})}
          />
        </Grid>
        <Grid item xs={6} md={10}>
          <Typography
            fontFamily="Nunito"
            fontWeight="600"
            fontSize="16px"
            marginLeft="20px"
          >
            Інформація про подію
          </Typography>
          <OutlinedInput
            fullWidth
            type="text"
            placeholder="About event"
            {...register("About event", {})}
          />
        </Grid>
        <Grid item xs={6} md={12}>
          <Typography
            paddingTop="20px"
            fontFamily="Nunito"
            fontWeight="800"
            fontSize="36px"
            textAlign="center"
          >
            Фото події
          </Typography>
        </Grid>
        <Grid item xs={6} md={10} textAlign="center">
          <Button
            variant="outlined"
            component="label"
            style={{
              fontFamily: "Nunito",
              width: 350,
              border: 0,
              borderRadius: 8,
              boxShadow: "0 0 6px 2px rgba(255, 105, 135, 0.3)",
              color: "black",
              height: 48,
              padding: "0 30px",
              fontSize: "22px",
              fontWeight: 700,
              margin: 30,
            }}
          >
            Завантажити фото
            <input
              hidden
              type="file"
              multiple
              fullWidth
              accept="image/png"
              {...register("Photos", {})}
            />
          </Button>
        </Grid>
        <Grid item xs={6} md={3} textAlign="center">
          <Button
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            style={{
              fontFamily: "Nunito",
              width: 200,
              background:
                "linear-gradient(313deg , rgba(62,165,207,1) 0%, rgba(134,95,192,1) 100%)",
              border: 0,
              borderRadius: 8,
              boxShadow: "0 0 6px 2px rgba(255, 105, 135, 0.3)",
              color: "white",
              height: 48,
              padding: "0 30px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Sumbit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
