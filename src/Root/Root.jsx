import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "../modules/Shared/AppBar";
import Home from "../pages/Home/Home";
import Organization from "../pages/Organization/Organization";
import Volunteer from "../pages/Volunteer/Volunteer";
import Photos from "../pages/Photos/Photos";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Organization" element={<Organization />} />
                <Route path="Volunteer" element={<Volunteer />} />
                <Route path="Photos" element={<Photos />} />
            </Routes>
        </div>
    )
}

export default App;