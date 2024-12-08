import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/footer.jsx";
import Navbar from "./component/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";
import Homepage from "./pages/Homepage.jsx";
import Rewards from "./pages/Rewards.jsx";
import Blog from "./pages/Blog.jsx";
import ClaimReward from "./pages/ClaimReward.jsx";
import Tracklocation from "./pages/Tracklocation.jsx";
import Notification from "./component/Notification.jsx";
import ArticlesList from "./pages/ArticlesList.jsx";
import LogIn from "./pages/auth/Login.jsx";
import Reg from "./pages/auth/Reg.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ClaimReward" element={<ClaimReward />} />
          <Route path="/Tracklocation" element={<Tracklocation />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/ArticlesList" element={<ArticlesList />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Reg" element={<Reg />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
