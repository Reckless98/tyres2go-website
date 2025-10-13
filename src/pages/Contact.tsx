import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Get in touch with us for any enquiries about our tyres and services.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need to book a service? Contact us using the information below or fill out the form.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <Phone size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-1">Phone</h3>
                      <a href="tel:+64123456789" className="text-primary-600 hover:text-primary-700">
                        +64 123 456 789
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <Mail size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-1">Email</h3>
                      <a href="mailto:info@tyres2go.net.nz" className="text-primary-600 hover:text-primary-700">
                        info@tyres2go.net.nz
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <MapPin size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Main Street<br />
                        Auckland<br />
                        New Zealand
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <Clock size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-lg mb-1">Opening Hours</h3>
                      <div className="text-gray-600">
                        <p>Monday - Friday: 8:00am - 5:00pm</p>
                        <p>Saturday: 9:00am - 3:00pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl font-heading mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">[Google Maps Embed Placeholder]</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
