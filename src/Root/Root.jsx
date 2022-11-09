import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../modules/shared/components/AppBar";
import Home from "../pages/home/home";
import Organization from "../pages/organization/organization";
import Volunteer from "../pages/volunteer/volunteer";
import Photos from "../pages/photos/photos";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { default_theme } from "../modules/shared/components/Theme";

function App() {
  return (
    <ThemeProvider theme={default_theme}>
      <CssBaseline />
      <div>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Organization" element={<Organization />} />
          <Route path="Volunteer" element={<Volunteer />} />
          <Route path="Photos" element={<Photos />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
