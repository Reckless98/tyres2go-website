import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Tyres', href: '/tyres' },
    { name: 'Auto Services', href: '/auto-services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top Bar - Tyres2Go Blue & Orange Theme with Gradient Animation */}
      <div className="bg-gradient-to-r from-primary-blue via-primary-orange to-primary-blue bg-[length:200%_100%] animate-gradient text-white py-2">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:033417675" className="flex items-center gap-2 hover:text-gray-100 transition-all hover:scale-105">
              <Phone size={16} className="animate-pulse-slow" />
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
          {/* Logo with Hover Effect */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-heading font-bold transition-all duration-300 group-hover:scale-110">
              <span className="text-primary-blue transition-all group-hover:drop-shadow-[0_0_8px_rgba(30,115,190,0.6)]">Tyres</span>
              <span className="text-primary-orange transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,140,0,0.6)]">2</span>
              <span className="text-primary-blue transition-all group-hover:drop-shadow-[0_0_8px_rgba(30,115,190,0.6)]">Go</span>
            </div>
          </Link>

          {/* Desktop Navigation with Enhanced Hover Effects */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-primary-blue'
                    : 'text-gray-700 hover:text-primary-blue'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-blue to-primary-orange transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="relative bg-gradient-to-r from-primary-blue to-primary-dark text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-neon hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-blue hover:text-primary-dark transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-2 border-primary-orange pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-blue bg-primary-orange/10'
                      : 'text-gray-700 hover:text-primary-blue hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-primary-blue text-white hover:bg-primary-dark px-6 py-3 rounded-lg font-medium text-center transition-all shadow-md"
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
