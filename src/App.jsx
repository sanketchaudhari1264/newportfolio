import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import SmartKrishi from "./components/smartkrishi";
import TyreX from "./components/tyrex";
import LandVault from "./components/landvault";
import Ignaite from "./components/ignaite";
import ScPortfolio from "./components/sc-portfolio";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Commander from "./components/commander";
import Experience from "./components/experience";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/smartkrishi" element={<SmartKrishi />} />
        <Route path="/projects/tyrex" element={<TyreX />} />
        <Route path="/projects/landvault" element={<LandVault />} />
        <Route path="/projects/ignaite" element={<Ignaite />} />
        <Route path="/projects/sc-portfolio" element={<ScPortfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/commander" element={<Commander />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
