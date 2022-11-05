import { createTheme } from "@mui/material/styles";

export const default_theme = createTheme({
    palette: {
        type: 'light',
        primary: {
        main: '#ff8c00',
        light: '#fd9a20',
        dark: '#a45b00',
        contrastText: '#ffffff',
      },
        secondary: {
        main: '#ffffff',
      },
        background: {
        default: '#ffea98',
      },
    },
  });