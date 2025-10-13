import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { locations } from '../config/businessData';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-red to-primary-yellow text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Get in touch with Tyres2Go & JT Automotive. We're here to help with all your tyre and automotive service needs across Christchurch.
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
                <p className="text-sm text-gray-600">Tyres2Go</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-gray-900">Call Us</h3>
                <a href="tel:033417674" className="text-primary-red hover:text-primary-dark font-medium">03 341 7674</a>
                <p className="text-sm text-gray-600">JT Automotive</p>
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

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Have a question or need a quote? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    >
                      <option value="">Select a subject</option>
                      <option value="tyres">Tyre Enquiry</option>
                      <option value="servicing">Vehicle Servicing</option>
                      <option value="wof">WOF Inspection</option>
                      <option value="repairs">Repairs</option>
                      <option value="mobile">Mobile Service</option>
                      <option value="quote">Request a Quote</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
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
