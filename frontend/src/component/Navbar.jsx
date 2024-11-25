import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes for prop validation

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/logout",
        {},
        {
          withCredentials: true,
        }
      );

      localStorage.removeItem("token");
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/Reg";
  const [isOpen, setIsOpen] = useState(false);

  if (isAuthPage) return null;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the NavItem component with prop validation
  const NavItem = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
      <NavLink
        to={to}
        className={`relative text-black-600 hover:text-green-800 transition-all duration-300 py-2 px-4 rounded-lg group
          ${isActive ? "text-green-800 font-semibold" : ""}
        `}
      >
        {/* Hover and active indicator */}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform origin-left transition-all duration-300
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
        />
        {children}

        {/* Background hover effect */}
        <span
          className={`absolute inset-0transition-all duration-300 -z-10
          ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
        />
      </NavLink>
    );
  };

  // PropTypes validation for NavItem
  NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired, // This validates that 'children' is passed as a valid React node
  };

  return (
    <>
      <header className="bg-green-200 py-4 fixed top-0 w-full z-50 transition-all duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="./src/assets/images/logo.png"
                alt="Logo Resikel"
                className="w-16 h-16 mr-3"
              />
            </a>
          </div>

          {/* Hamburger Icon */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black transition-transform duration-300 hover:scale-110"
            >
              <i
                className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
              <li>
                <NavItem to="/">Beranda</NavItem>
              </li>
              <li>
                <NavItem to="/About">Tentang Kami</NavItem>
              </li>
              <li>
                <NavItem to="/Education">Edukasi</NavItem>
              </li>
              <li>
                <NavItem to="/Rewards">Hadiah</NavItem>
              </li>

              {/* Login Link inside the menu (visible on mobile) */}
              <li className="lg:hidden">
                <NavItem to="/Login">Masuk</NavItem>
              </li>
            </ul>
          </nav>

          {/* Login Section for larger screens */}
          <div className="hidden lg:flex items-center space-x-2">
            <i className="fas fa-user text-green-600 transition-transform duration-300 group-hover:scale-110"></i>
            <button
              onClick={Logout}
              className="text-black transition-transform duration-300 hover:scale-110"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 transition-all duration-300">
        {/* Your main content goes here */}
      </main>
    </>
  );
};

export default Navbar;
