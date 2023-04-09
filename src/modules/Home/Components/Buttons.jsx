import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Buttons() {
  return (
    <div>
      <Stack
        sx={{ pt: 10 }}
        direction="row"
        spacing={26}
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
    </div>
  );
}
