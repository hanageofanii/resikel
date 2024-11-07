import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/Reg";

  const [isOpen, setIsOpen] = useState(false);
  if (isAuthPage) return null;
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-green-200 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <img
              src="./src/assets/images/logo.png"
              alt="Logo Resikel"
              className="w-11 h-11 mr-3"
            />
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`lg:flex ${isOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            <li>
              <a href="/" className="text-black-600 hover:text-green-800">
                Home
              </a>
            </li>
            <li>
              <a href="/About" className="text-black-600 hover:text-green-800">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Education"
                className="text-black-600 hover:text-green-800">
                Education
              </a>
            </li>
            <li>
              <a
                href="/Rewards"
                className="text-black-600 hover:text-green-800">
                Rewards
              </a>
            </li>

            {/* Login Link inside the menu (visible on mobile) */}
            <li className="lg:hidden">
              <a
                href="/Login"
                className="text-black-600 cursor-pointer hover:text-green-800">
                Login
              </a>
            </li>
          </ul>
        </nav>

        {/* Login Section for larger screens */}
        <div className="hidden lg:flex items-center space-x-2">
          <i className="fas fa-user text-green-600"></i>
          <a
            href="/Login"
            className="text-black-600 cursor-pointer hover:text-green-800"></a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
