import { useState } from "react";
import logo from "../../assets/logo.webp";
import { categoryListData } from "../../data/categoriListData";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="text-white font-bold text-lg">
            <a href="/" className="hover:opacity-90 transition-opacity">
              <img
                src={logo}
                alt="Company Logo"
                className="rounded-full object-cover w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
                loading="lazy"
              />
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white absolute top-4 right-4 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <div
            className={`${
              isMenuOpen ? "flex flex-col" : "hidden"
            } lg:flex lg:items-center lg:flex-row space-x-4`} // Change here to flex-row for desktop view
          >
            <Link to={'/search'}>
              <button className="flex items-center space-x-2 w-[100px] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 hover:bg-gray-200 bg-white">
                <FaSearch className="text-black-600" /> {/* Search Icon */}
                <span className="text-black-600">খুঁজুন</span> {/* Text */}
              </button>
            </Link>
            {categoryListData.map((item) => {
              return (
                <Link
                  key={item.label}
                  className="text-white hover:text-gray-200"
                  to={`newsByCategory/${item.value}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Box for Mobile */}
        <div className={`mt-2 lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;


