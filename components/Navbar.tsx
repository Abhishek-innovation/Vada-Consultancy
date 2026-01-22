import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
             <div className="w-10 h-10 bg-brand-navy flex items-center justify-center rounded-lg text-white">
                <i className="fas fa-graduation-cap text-xl"></i>
             </div>
             <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-brand-navy leading-none">Vada</span>
                <span className="font-heading font-bold text-lg text-brand-orange leading-none">Consultancy</span>
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brand-orange'
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+917209741043"
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <i className="fas fa-phone-alt"></i>
              <span>+91 7209741043</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-brand-navy focus:outline-none"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-brand-orange'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+917209741043"
              className="block w-full text-center mt-4 bg-brand-orange text-white font-bold py-3 px-6 rounded-lg shadow-md"
            >
              <i className="fas fa-phone-alt mr-2"></i> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;