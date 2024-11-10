import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/Reg";

  if (isAuthPage) return null;

  return (
    <footer className="bg-green-200 text-center py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start items-center">
            <a href="/">
              <img
                src="./src/assets/images/logo.png"
                alt="Logo Resikel"
                className="w-24 h-24"
              />
            </a>
          </div>

          {/* Informasi Links */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-lg font-bold mb-2">Informasi</p>
            <a
              href="/About"
              className="text-black-600 hover:text-green-800 mb-2">
              Tentang Kami
            </a>
            <a
              href="/Education"
              className="text-black-600 hover:text-green-800 mb-2">
              Edukasi
            </a>
            <a
              href="/Rewards"
              className="text-black-600 hover:text-green-800 mb-2">
              Hadiah
            </a>
            <a href="/Contact" className="text-black-600 hover:text-green-800">
              FAQ
            </a>
          </div>

          {/* Hubungi Kami Section */}
          <div className="flex flex-col items-center sm:items-start">
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
              Kontak
            </a>
          </div>

          {/* Sosial Media Section */}
          <div className="flex flex-col items-center sm:items-start">
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

        {/* Copyright Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-black-600">
            &copy; 2024 Jaya Ternak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
