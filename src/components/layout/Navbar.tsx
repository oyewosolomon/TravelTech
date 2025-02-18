import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ArrowRight,
  Plane,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';

// Define types for menu items
type MenuItems = {
  [key: string]: string[];
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItems = {
    'Book': ['Flights', 'Hotels', 'Vacation Packages', 'Car Rentals'],
    'Destinations': ['Popular Cities', 'Travel Guides', 'Seasonal Deals', 'Group Tours'],
    'Services': ['AI Trip Planner', '24/7 Support', 'Travel Insurance', 'Business Travel']
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-blue-600 text-white py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>1-800-TRAVEL</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@traveltech.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-transparent border-none text-gray-300 focus:ring-0">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <select className="bg-transparent border-none text-gray-300 focus:ring-0">
                <option value="EN">English</option>
                <option value="ES">Español</option>
                <option value="FR">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 w-full ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
      } transition-all duration-300`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <Globe className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-2xl font-bold text-blue-600">TravelTech</span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(menuItems).map(([category, items]) => (
                <div 
                  key={category}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(category)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 py-2 text-gray-700 hover:text-blue-600">
                    <span>{category}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {activeDropdown === category && (
                    <div className="absolute left-0 w-56 mt-2 bg-white border rounded-lg shadow-lg py-2">
                      {items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">Sign In</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-6 py-4">
              {Object.entries(menuItems).map(([category, items]) => (
                <div key={category} className="py-2">
                  <div className="font-semibold text-gray-900 py-2">{category}</div>
                  {items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block py-2 text-gray-700 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              ))}
              <div className="mt-4 space-y-4">
                <button className="w-full text-center text-gray-700 hover:text-blue-600">
                  Sign In
                </button>
                <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;