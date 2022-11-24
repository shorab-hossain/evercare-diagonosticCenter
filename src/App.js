import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/Home/About/About';
import Blog from './Components/Home/Blog/Blog';
import Appointment from './Components/Home/Buttonlink/Appointment/Appointment';
import VisitorGuiide from './Components/Home/Buttonlink/VisitorGuide/VisitorGuiide';
import Contract from './Components/Home/Contract/Contract';
import Home from './Components/Home/Home/Home';
import Navigation from "./Components/Home/Navigation/Navigation";
import Services from './Components/Home/Services/Services';

function App() {
  return (
    <div>
    <Router>
      <Navigation/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="home" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="services" element={<Services />} />
         <Route path="blog" element={<Blog />} />
         <Route path="contract" element={<Contract />} />
         <Route path="Appointment" element={<Appointment />} />
         <Route path="VisitorGuide" element={<VisitorGuiide />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
