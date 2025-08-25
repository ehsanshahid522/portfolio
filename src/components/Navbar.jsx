import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#f3f4f6] dark:bg-[#0b0b0b] shadow-md border-b border-transparent dark:border-b-2 dark:border-[#facc15]/40 sticky top-0 z-50 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/ehsan.jpg"
              alt="Ehsan Shahid"
              className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
            <span className="text-2xl font-bold text-[#000000] dark:text-white">Ehsan Shahid</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition font-medium ${
                    isActive
                      ? "text-[#facc15]"
                      : "text-[#000000] dark:text-white hover:text-[#facc15]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <DarkModeToggle />
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#000000] dark:text-white md:hidden focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-2 bg-[#f3f4f6] dark:bg-[#0b0b0b] rounded shadow-lg dark:shadow-none border border-gray-200 dark:border-[#facc15]/20 py-2">
            <div className="px-4 pb-2 md:hidden">
              <DarkModeToggle />
            </div>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 transition ${
                    isActive
                      ? "bg-[#facc15] text-black"
                      : "text-[#000000] dark:text-white hover:bg-[#facc15] hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;


