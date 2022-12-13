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

    background: {
      default: "HSLA(228,39%,82%,1)",
    },
  },
});
