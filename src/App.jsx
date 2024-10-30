import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar.jsx";
import Homepage from "./pages/homepage.jsx";
import Footer from "./component/footer.jsx"; 
import About from "./pages/About.jsx";  

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;