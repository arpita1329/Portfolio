import { useState } from "react";

// Components
import Navbar from "./Components/navbar/Navbar";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";

// CSS File
import "./app.scss";

function App() {
  const [ menuOpen, setMenuOpen ] = useState(false); 
  return (
    <div className="app">
     <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     <div className="sections">
       <Intro />
       <Portfolio />
       <Works />
       <Testimonials />
       <Contact />
     </div>
    </div>
  );
}

export default App;
