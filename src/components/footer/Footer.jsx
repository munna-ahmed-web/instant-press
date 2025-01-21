const Footer = () => {
  return (
    <footer className="bg-blue-500 text-gray-200">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We are committed to providing the best services and solutions to
              meet your needs. Contact us for more details.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <button
                type="submit"
                className="w-full bg-white text-black p-2 rounded-md hover:bg-red-400 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-400 transition"
                >
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-400 transition"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-400 transition"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-200 hover:text-gray-400 transition"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Your Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
