const Footer = () => {
  return (
    <footer className="bg-green-100 text-center py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex items-center">
            <img
              src="./src/assets/images/logo.png"
              alt="Logo Resikel"
              className="w-20 h-20 mr-3"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-2 text-justify">Roadmap</p>
            <a href="/About" className="text-black-600 hover:text-green-800">
              About Us
            </a>
            <a
              href="/Education"
              className="text-black-600 hover:text-green-800"
            >
              Education
            </a>
            <a href="/Rewards" className="text-black-600 hover:text-green-800">
              Reward
            </a>
            <a href="/Contact" className="text-black-600 hover:text-green-800">
              FAQ
            </a>
          </div>
          <div className="text-gray-700 text-justify md:text-left">
            <p className="text-lg font-bold text-justify mb-2">Hubungi Kami</p>
            <p>
              <a href="mailto:resikel@gmail.com">resikel@gmail.com</a>
            </p>
            <p>
              <a href="tel:+62123456789">+62 123 456 789</a>
            </p>

            <a href="/Contact" className="text-black-600 hover:text-green-800">
              Contact
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <i className="fab fa-facebook text-green-600"></i>
            <i className="fab fa-twitter text-green-600"></i>
            <i className="fab fa-instagram text-green-600"></i>
            <i className="fab fa-linkedin text-green-600"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
