import { Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./pages/AppBar";
import Home from "./pages/Home";
import Organization from "./pages/Organization";
import Volunteer from "./pages/Volunteer";
import Photo from "./pages/Photo";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Organization" element={<Organization />} />
                <Route path="Volunteer" element={<Volunteer />} />
                <Route path="Photo" element={<Photo />} />

            </Routes>
        </div>
    )
}

export default App;