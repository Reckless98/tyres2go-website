import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Tyres2Go Christchurch"
        description="Tyres2Go privacy policy. Learn how we collect, use, and protect your personal information."
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
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Your privacy is important to us
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  <p className="text-gray-700">
                    Tyres2Go is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you visit our locations or use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                  <p className="text-gray-700 mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Use our services</li>
                    <li>Contact us by phone or email</li>
                    <li>Visit our locations</li>
                    <li>Make a booking or purchase</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    This information may include your name, contact details, vehicle information, and service history.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide and maintain our services</li>
                    <li>Process your service requests and bookings</li>
                    <li>Communicate with you about your vehicle and our services</li>
                    <li>Maintain service records for warranty purposes</li>
                    <li>Improve our services and customer experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclosure of Your Information</h2>
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    information with service providers who assist us in operating our business, conducting our 
                    services, or servicing you, as long as those parties agree to keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Security of Your Information</h2>
                  <p className="text-gray-700">
                    We use administrative, technical, and physical security measures to help protect your personal 
                    information. While we have taken reasonable steps to secure the personal information you provide 
                    to us, please be aware that no security measures are perfect or impenetrable.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                  <p className="text-gray-700 mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to our processing of your personal information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have questions or comments about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
