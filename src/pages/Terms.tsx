import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const Terms: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | Tyres2Go Christchurch"
        description="Tyres2Go terms and conditions. Read about our service terms, warranties, and customer responsibilities."
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-red to-secondary text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Please read these terms carefully before using our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-700">
                    By accessing and using Tyres2Go services, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                  <p className="text-gray-700">
                    Tyres2Go provides tyre sales, fitting, wheel alignment, vehicle servicing, mechanical repairs, 
                    and related automotive services across our 6 locations in Christchurch and through our mobile service.
                  </p>
                  <p className="text-gray-700 mt-3">
                    We reserve the right to refuse service to anyone for any reason at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Payment</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>All prices are in New Zealand Dollars (NZD) and include GST unless otherwise stated</li>
                    <li>Prices are subject to change without notice</li>
                    <li>Payment is due upon completion of services unless prior arrangements have been made</li>
                    <li>We accept cash, EFTPOS, and major credit cards</li>
                    <li>Payment plans may be available for certain services - please inquire</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Bookings and Cancellations</h2>
                  <p className="text-gray-700">
                    While we strive to accommodate all booking times, they are subject to availability and may need 
                    to be rescheduled. We request at least 24 hours notice for cancellations where possible.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties</h2>
                  <p className="text-gray-700 mb-3">
                    All tyres and services come with manufacturer and/or MTA warranties as applicable:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Tyres carry manufacturer's warranty covering defects in materials and workmanship</li>
                    <li>Our workmanship is backed by MTA warranty protection</li>
                    <li>Warranty terms vary by product and service - please ask for details</li>
                    <li>Warranties may be void if improper use or maintenance is identified</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    See our separate Warranty page for detailed information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Customer Responsibilities</h2>
                  <p className="text-gray-700 mb-3">
                    As a customer, you are responsible for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Providing accurate information about your vehicle and its issues</li>
                    <li>Removing personal belongings from your vehicle before service</li>
                    <li>Collecting your vehicle within 7 days of service completion</li>
                    <li>Regular maintenance of your vehicle as recommended</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liability</h2>
                  <p className="text-gray-700">
                    Tyres2Go will not be liable for any indirect, incidental, special, or consequential damages arising 
                    out of the use or inability to use our services. Our liability is limited to the cost of the 
                    services provided.
                  </p>
                  <p className="text-gray-700 mt-3">
                    We are not responsible for any personal items left in vehicles during service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                  <p className="text-gray-700">
                    All content, trademarks, and data on this site and in our materials, including software, databases, 
                    text, graphics, icons, and hyperlinks, are the property of or licensed to Tyres2Go and are 
                    protected by New Zealand and international intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                  <p className="text-gray-700">
                    These terms and conditions are governed by and construed in accordance with the laws of New Zealand. 
                    Any disputes shall be subject to the exclusive jurisdiction of the New Zealand courts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                    posting. Your continued use of our services following any changes constitutes acceptance of the 
                    new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms & Conditions, please contact us:
                  </p>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 font-semibold">Tyres2Go</p>
                    <p className="text-gray-700">477 Blenheim Road, Sockburn, Christchurch 8042</p>
                    <p className="text-gray-700">Phone: 03 341 7675</p>
                    <p className="text-gray-700">Email: info@tyres2go.net.nz</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;
