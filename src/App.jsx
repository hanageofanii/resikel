import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import Footer from "./component/Footer.jsx";
import About from "./pages/About.jsx";
import Rewards from "./pages/Rewards.jsx";
import Contact from "./pages/Contact.jsx";

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
