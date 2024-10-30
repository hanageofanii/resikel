const Navbar = () => {
  return (
    <header className="bg-green-100 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./src/assets/images/logo.png"
            alt="Logo Resikel"
            className="w-11 h-11 mr-3"
          />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
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
          </ul>
        </nav>

        {/* Login Section */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-user text-green-600"></i>
          <span className="text-black-600 cursor-pointer hover:text-green-800">
            Login
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
