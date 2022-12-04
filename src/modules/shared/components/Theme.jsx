import { createTheme } from "@mui/material/styles";

export const default_theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ff8c00",
      light: "#fd9a20",
      dark: "#a45b00",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    backgroundImage: {
      backgroundImage:
        "radial-gradient(#ffffff 2.1500000000000001px, transparent 2.1500000000000001px), radial-gradient(#ffffff 2.1500000000000001px, HSLA(228,39%,82%,1) 2.1500000000000001px)",
      backgroundSize: "46px 46px",
      backgroundPosition: "0 10px,23px 33px",
    },
    background: {
      default: "HSLA(228,39%,82%,1)",
    },
  },
});
