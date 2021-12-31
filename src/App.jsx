
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Portifolio from "./components/portifolio/Portifolio";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return(
  <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Contact/>
       <Works/>
       <Intro/>
       <Testimonials/>
       <Portifolio/>
       
     </div>
    </div>
  );
}

export default App;
