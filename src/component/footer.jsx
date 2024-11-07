import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/Reg";

  if (isAuthPage) return null;

  return (
    <footer className="bg-green-200 text-center py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-start items-center mb-6 md:mb-0">
            <a href="/">
              <img
                src="./src/assets/images/logo.png"
                alt="Logo Resikel"
                className="w-20 h-20"
              />
            </a>
          </div>

          {/* Roadmap Links */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <p className="text-lg font-bold mb-2">Roadmap</p>
            <a
              href="/About"
              className="text-black-600 hover:text-green-800 mb-2">
              About Us
            </a>
            <a
              href="/Education"
              className="text-black-600 hover:text-green-800 mb-2">
              Education
            </a>
            <a
              href="/Rewards"
              className="text-black-600 hover:text-green-800 mb-2">
              Reward
            </a>
            <a href="/Contact" className="text-black-600 hover:text-green-800">
              FAQ
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-black-700 text-center md:text-left mb-6 md:mb-0">
            <p className="text-lg font-bold mb-2">Hubungi Kami</p>
            <p>
              <a
                href="mailto:resikel@gmail.com"
                className="text-black-600 hover:text-green-800">
                pejantara@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+62123456789"
                className="text-black-600 hover:text-green-800">
                +6282169607908
              </a>
            </p>
            <a href="/Contact" className="text-black-600 hover:text-green-800">
              Contact
            </a>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg font-bold mb-2">Sosial Media Kami</p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/pejantara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/pejantara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/pejantara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/pejantara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
