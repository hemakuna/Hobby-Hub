import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crochet from "./pages/Crochet";
import Music from "./pages/Music";
import Gardening from "./pages/Gardening";
import Painting from "./pages/Painting";
import Photography from "./pages/Photography";
import Writing from "./pages/Writing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/music" element={<Music />} />
        <Route path="/gardening" element={<Gardening />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/writing" element={<Writing />} />
      </Routes>
    </BrowserRouter>
   
   );
}

export default App;