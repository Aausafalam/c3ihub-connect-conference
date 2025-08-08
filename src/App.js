import "./App.css";
import Speakers from "./pages/Pannel";
import MainLayout from "./layouts";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import RDExhibit from "./pages/R&DPavilion";
import Program from "./pages/Program";
import ContactUS from "./pages/ContactUs";
import PannelDiscussion from "./pages/Investor";

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route element={<Home />} path="/" />
                <Route element={<Program />} path="/program" />
                <Route element={<Speakers />} path="/speakers/:domain?" />
                <Route element={<RDExhibit />} path="/pavilion/:type?" />
                <Route element={<ContactUS />} path="/contact-us" />
                <Route element={<PannelDiscussion/>} path="/talks/:type" />
            </Route>
        </Routes>
    );
}

export default App;
