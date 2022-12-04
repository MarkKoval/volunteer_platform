import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Root from "./root/Root";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { default_theme } from "./modules/shared/components/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={default_theme}>
      <CssBaseline />
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>
  </ThemeProvider>
);
reportWebVitals();
