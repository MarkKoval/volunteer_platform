import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../modules/shared/components/AppBar";
import Home from "../pages/Home/Home";
import Organization from "../pages/Organization/Organization";
import Volunteer from "../pages/Volunteer/Volunteer";
import Photos from "../pages/Photos/Photos";
import Test from "../pages/test/Test";
import { BackgroundBox } from "../modules/shared/components/BackgroundBox.styled";

function App() {
  return (
    <BackgroundBox>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Organization" element={<Organization />} />
        <Route path="Volunteer" element={<Volunteer />} />
        <Route path="Photos" element={<Photos />} />
        <Route path="Test" element={<Test />} />
      </Routes>
    </BackgroundBox>
  );
}

export default App;
