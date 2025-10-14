import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Award, Star } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Passenger Tyres',
    '4WD/SUV Tyres',
    'Wheel Alignment',
    'Puncture Repairs',
    'Auto Repairs',
    'WOF Inspections',
    'Mobile Service',
    'Brake Services',
  ];

  const locations = [
    'Riccarton (Main)',
    'Opawa',
    'Sydenham',
    'New Brighton',
    'Shirley',
    'Rangiora',
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* MTA Certified Banner */}
      <div className="bg-gradient-to-r from-primary-red to-primary-yellow py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8" />
              <div>
                <div className="font-bold text-lg">MTA Certified</div>
                <div className="text-sm text-white/90">Motor Trade Association Member</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 fill-current" />
              <div>
                <div className="font-bold text-lg">4.1 Google Rating</div>
                <div className="text-sm text-white/90">100+ Customer Reviews</div>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">15+ Years Experience</div>
              <div className="text-sm text-white/90">Serving Christchurch Since 2008</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-heading font-bold text-2xl mb-4">
              <span className="text-primary-red">Tyres</span>
              <span className="text-primary-yellow">2</span>
              <span className="text-primary-red">Go</span>
            </h3>
            <p className="text-sm mb-6 leading-relaxed">
              Christchurch's trusted partner for quality tyres and professional automotive services. 
              6 locations across Christchurch & North Canterbury. MTA certified with full warranty backing.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-red transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-yellow hover:text-gray-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/tyres" 
                    className="hover:text-primary-yellow transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-yellow rounded-full group-hover:w-2 transition-all"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Locations</h4>
            <ul className="space-y-2 text-sm mb-6">
              {locations.map((location) => (
                <li key={location} className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary-yellow flex-shrink-0" />
                  {location}
                </li>
              ))}
            </ul>
            <Link 
              to="/contact" 
              className="inline-block bg-primary-red text-white hover:bg-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-all"
            >
              Find Nearest Location
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-red rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <a href="tel:033417675" className="hover:text-primary-yellow block font-medium text-white mb-1">
                      03 341 7675
                    </a>
                    <div className="text-xs text-gray-400">Call us for expert service</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <a href="mailto:info@tyres2go.net.nz" className="hover:text-primary-yellow block font-medium text-white">
                      info@tyres2go.net.nz
                    </a>
                    <div className="text-xs text-gray-400">Email us anytime</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary-yellow" />
                  </div>
                  <div>
                    <div className="font-medium text-white">477 Blenheim Road</div>
                    <div className="text-xs text-gray-400">Sockburn, Christchurch 8042</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary-yellow" />
                  </div>
                  <div>
                    <div className="font-medium text-white">Mon-Fri: 8am - 5pm</div>
                    <div className="text-xs text-gray-400 mb-1">Sat: 9am - 3pm</div>
                    <div className="text-xs text-gray-400">Sunday: Closed</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Tyres2Go. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="hover:text-primary-yellow transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-yellow transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="hover:text-primary-yellow transition-colors">
                Sitemap
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-primary-yellow">★</span> 4.1 Google Rating
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Strip */}
      <div className="bg-gradient-to-r from-primary-dark to-secondary-dark py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-center">
            <Phone className="w-5 h-5" />
            <span className="font-medium">Need Mobile Tyre Service?</span>
            <a href="tel:033417675" className="font-bold text-lg hover:text-primary-yellow transition-colors">
              Call 03 341 7675
            </a>
            <span className="text-sm text-white/80">Available 7 Days a Week</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
