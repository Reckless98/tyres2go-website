import React from 'react';
import { Mail, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import { locations } from '../config/businessData';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-red to-secondary text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Visit Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Find your nearest Tyres2Go location in Christchurch. 6 convenient branches ready to serve you, or we can come to you with our mobile service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900">Call Us</h3>
                <a href="tel:033417675" className="text-primary-red hover:text-primary-dark font-medium">03 341 7675</a>
                <p className="text-sm text-gray-600">All Services</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900">Email Us</h3>
                <a href="mailto:info@tyres2go.net.nz" className="text-primary-red hover:text-primary-dark font-medium">info@tyres2go.net.nz</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Our Locations</h2>
            <p className="text-xl text-gray-600">
              Find us at {locations.length} convenient locations across Christchurch and Canterbury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`p-6 h-full hover:shadow-lg transition-shadow ${location.isMain ? 'border-2 border-primary-red' : ''}`}>
                  {location.isMain && (
                    <div className="inline-block bg-primary-red text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      MAIN LOCATION
                    </div>
                  )}
                  <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                      <div className="text-gray-600">
                        <p>{location.address}</p>
                        <p>{location.suburb}, {location.city} {location.postalCode}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-primary-red">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-red flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-600">
                        <p>Mon-Fri: {location.hours.monday}</p>
                        <p>Sat: {location.hours.saturday}</p>
                        <p>Sun: {location.hours.sunday}</p>
                      </div>
                    </div>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-red hover:text-primary-dark font-medium mt-2"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Call Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Need Assistance?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Call us directly for quotes, bookings, or any questions about our services. Our friendly team is ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:033417675"
                  className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call 03 341 7675
                </a>
                <a
                  href="mailto:info@tyres2go.net.nz"
                  className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Find Us on the Map</h2>
            <p className="text-lg text-gray-600">Our main location in Riccarton, Christchurch</p>
          </motion.div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 font-medium">Google Maps Integration</p>
              <p className="text-sm text-gray-400 mt-2">477 Blenheim Road, Sockburn, Christchurch 8042</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
