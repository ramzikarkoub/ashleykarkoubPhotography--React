import "./App.scss";
import About from "./components/about/About";
import Clienalbums from "./components/clientalbums/Clienalbums";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Home />
        <About />
        <Clienalbums />
        <Portfolio />
        <Contact />
      </div>
      <SocialMedia />
    </div>
  );
}

export default App;
