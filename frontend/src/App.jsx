import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./component/footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Notification from "./component/Notification.jsx";
import Sidebar from "./component/Sidebar.jsx";
import About from "./pages/About.jsx";
import ArticleAdmin from "./pages/ArticleAdmin.jsx";
import ArticlesList from "./pages/ArticlesList.jsx";
import LogIn from "./pages/auth/Login.jsx";
import Reg from "./pages/auth/Reg.jsx";
import Blog from "./pages/Blog.jsx";
import ClaimReward from "./pages/ClaimReward.jsx";
import Contact from "./pages/Contact.jsx";
import ContactAdmin from "./pages/ContactAdmin.jsx";
import Education from "./pages/Education.jsx";
import Homepage from "./pages/Homepage.jsx";
import Rewards from "./pages/Rewards.jsx";
import SampahAdmin from "./pages/SampahAdmin.jsx";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Tracklocation from "./pages/Tracklocation.jsx";
import UserAdmin from "./pages/UserAdmin.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Sidebar />
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/article/:id" element={<Blog />} />
          <Route path="/ClaimReward" element={<ClaimReward />} />
          <Route path="/Tracklocation" element={<Tracklocation />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/ArticlesList" element={<ArticlesList />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/ArticleAdmin" element={<ArticleAdmin />} />
          <Route path="/ContactAdmin" element={<ContactAdmin />} />
          <Route path="/SampahAdmin" element={<SampahAdmin />} />
          <Route path="/UserAdmin" element={<UserAdmin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
