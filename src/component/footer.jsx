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
          <div className="text-gray-700 text-justify md:text-left">
            <p className="text-lg font-bold mb-2 text-justify">Roadmap</p>
            <p>About Us</p>
            <p>Education</p>
            <p>Rewards</p>
            <p>FAQ</p>
          </div>
          <div className="text-gray-700 text-justify md:text-left">
            <p className="text-lg font-bold text-justify mb-2">Hubungi Kami</p>
            <p>resikel@gmail.com</p>
            <p>+62 123 456 789</p>
            <p>Contact Us</p>
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
