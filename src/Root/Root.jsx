import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../modules/shared/components/AppBar";
import Home from "../pages/home/Home";
import Organization from "../pages/organization/Organization";
import Volunteer from "../pages/volunteer/Volunteer";
import Photos from "../pages/photos/Photos";
import Test from "../pages/test/Test";
import { BackgroundBox } from "../modules/shared/components/BackgroundBox";

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
