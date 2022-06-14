import { Route, Routes } from "react-router-dom";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import Home from "./components/home/Home";
import Naveber from "./components/home/Naveber";
import Vision from "./components/home/Vision";
import Footer from "./components/shear/Footer";


function App() {
  return (
    <div className= "">
      <Naveber>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="vision" element={<Vision />} />
      </Routes>
   
      <Footer></Footer>
      </Naveber>
      
    </div>
  );
}

export default App;
