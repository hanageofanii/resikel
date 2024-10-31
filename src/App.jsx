import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./component/Footer.jsx";
import About from "./pages/About.jsx";
import Rewards from "./pages/Rewards.jsx";
<<<<<<< HEAD
import Contact from "./pages/Contact.jsx";

=======
>>>>>>> 38f9b10695fc7e6736b34efb72ea4c1c40d637d2
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
