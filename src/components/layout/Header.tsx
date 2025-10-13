import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tyres', href: '/tyres' },
    { name: 'Auto Services', href: '/auto-services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar - Tyres2Go Red & Yellow Theme */}
      <div className="bg-gradient-to-r from-primary-red to-primary-yellow text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:033417675" className="flex items-center gap-2 hover:text-gray-100 transition-colors">
              <Phone size={16} />
              <span className="font-medium">03 341 7675</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Christchurch • 6 Locations</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-heading font-bold">
              <span className="text-primary-red">Tyres</span>
              <span className="text-primary-yellow">2</span>
              <span className="text-primary-red">Go</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors relative ${
                  isActive(item.href)
                    ? 'text-primary-red after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-yellow'
                    : 'text-gray-700 hover:text-primary-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-primary-red text-white hover:bg-primary-dark px-6 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-red hover:text-primary-dark transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-primary-yellow pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-red bg-primary-yellow/10'
                      : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary-red text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium text-center transition-all shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
