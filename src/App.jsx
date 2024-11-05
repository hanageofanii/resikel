import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/footer.jsx";
import Navbar from "./component/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";
import Homepage from "./pages/Homepage.jsx";
import Rewards from "./pages/Rewards.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
