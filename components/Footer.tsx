import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <i className="fas fa-graduation-cap text-3xl text-brand-orange"></i>
               <h3 className="font-heading font-bold text-2xl">Vada Consultancy</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trusted Educational Advisers for students across India. We guide your path to top colleges in Engineering, Medical, Management, and Law.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 border-b-2 border-brand-orange inline-block pb-1">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-brand-orange transition-colors">Our Courses</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-6 border-b-2 border-brand-orange inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-brand-orange mt-1"></i>
                <span className="text-gray-300">Pipra Chowk, Behind GD College,<br/>Begusarai, Bihar 851101</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-brand-orange"></i>
                <a href="tel:+917209741043" className="text-gray-300 hover:text-white">+91 7209741043</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-brand-orange"></i>
                <a href="tel:+917979848422" className="text-gray-300 hover:text-white">+91 7979848422</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-globe text-brand-orange"></i>
                <a href="https://www.vadaconsultancy.in" className="text-gray-300 hover:text-white">www.vadaconsultancy.in</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Vada Consultancy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;