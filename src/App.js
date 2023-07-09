import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Detalle from "./views/Detalle";
import NotFound from "./views/NotFound";
import Pokemones from "./views/Pokemones";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemones" element={<Pokemones />} />
                    <Route path="/pokemones/:name" element={<Detalle />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
