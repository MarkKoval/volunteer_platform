import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../modules/shared/components/AppBar";
import Home from "../pages/home/Home";
import Organization from "../pages/organization/Organization";
import Volunteer from "../pages/volunteer/Volunteer";
import Photos from "../pages/photos/Photos";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { default_theme } from "../modules/shared/components/Theme";
import Test from "../pages/test/Test";

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
          <Route path="Test" element={<Test />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
