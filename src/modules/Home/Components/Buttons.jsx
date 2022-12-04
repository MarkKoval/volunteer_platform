import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { MyButton } from "../../shared/components/For_All.styled";

export default function Buttons() {
  return (
    <div>
      <Stack
        sx={{ pt: 6 }}
        direction="row"
        spacing={20}
        justifyContent="center"
      >
        <MyButton variant="contained">
          <Link
            to={`/Volunteer`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Волонтерити
          </Link>
        </MyButton>
        <MyButton variant="contained">
          <Link
            to={`/Organization`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Організовувати
          </Link>
        </MyButton>
      </Stack>
    </div>
  );
}
