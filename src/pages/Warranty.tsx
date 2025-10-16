import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';

const Warranty: React.FC = () => {
  const warrantyFeatures = [
    'MTA (Motor Trade Association) member with Dealer Warranty protection',
    'Manufacturer warranties on all tyres',
    'Workmanship guarantee on all services',
    'Written warranty documentation provided',
    'Nationwide warranty coverage through MTA network',
    'Fair and transparent claims process',
  ];

  return (
    <>
      <SEO
        title="Warranty Information | Tyres2Go Christchurch"
        description="Learn about Tyres2Go warranty coverage. MTA member with comprehensive warranty protection on tyres and services."
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
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Warranty Information
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Quality service backed by comprehensive warranty coverage
              </p>
            </motion.div>
          </div>
        </section>

        {/* MTA Warranty Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                  MTA Warranty Protection
                </h2>
                <p className="text-xl text-gray-600">
                  As a member of the Motor Trade Association, all our work is backed by industry-leading warranty protection
                </p>
              </motion.div>

              <Card className="p-8">
                <div className="space-y-4">
                  {warrantyFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tyre Warranty Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                  Tyre Warranty
                </h2>
                <p className="text-xl text-gray-600">
                  All tyres come with manufacturer's warranty coverage
                </p>
              </motion.div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Manufacturer Warranty</h3>
                  <p className="text-gray-700 mb-3">
                    Every tyre we sell carries the manufacturer's warranty covering defects in materials and workmanship. 
                    Warranty periods vary by brand and tyre model, typically ranging from 1 to 5 years.
                  </p>
                  <p className="text-gray-700">
                    Warranty coverage includes replacement or credit for defective tyres based on remaining tread depth 
                    and manufacturer's terms.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Workmanship Warranty</h3>
                  <p className="text-gray-700 mb-3">
                    Our fitting and balancing workmanship is guaranteed. If you experience any issues related to our 
                    installation within 30 days, we'll rectify it at no charge.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Road Hazard</h3>
                  <p className="text-gray-700">
                    Road hazard warranty may be available for certain tyre purchases. This covers damage from potholes, 
                    glass, nails, and other road debris. Ask our team about road hazard coverage when purchasing tyres.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Warranty Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                  Service Warranty
                </h2>
                <p className="text-xl text-gray-600">
                  All mechanical and electrical work is covered by our workmanship warranty
                </p>
              </motion.div>

              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Workmanship Guarantee</h3>
                    <p className="text-gray-700">
                      We stand behind our work. All repairs and services are covered by our workmanship warranty, 
                      typically for 3 months or 5,000km (whichever comes first). Specific warranty periods may vary 
                      by service type.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Parts Warranty</h3>
                    <p className="text-gray-700">
                      Genuine and aftermarket parts carry manufacturer warranties ranging from 6 months to lifetime, 
                      depending on the part and manufacturer. We'll provide warranty details for all parts installed.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-secondary p-4 rounded">
                    <p className="text-gray-800 font-medium">
                      <strong>Important:</strong> Regular maintenance is required to maintain warranty coverage. 
                      Failure to maintain your vehicle as recommended may void warranty protection.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Warranty Claims Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-gray-900 text-center">
                  Making a Warranty Claim
                </h2>

                <Card className="p-8">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong className="text-gray-900">Step 1:</strong> Contact us as soon as you notice an issue. 
                      Bring your vehicle to any of our 6 locations or call us to arrange inspection.
                    </p>
                    <p>
                      <strong className="text-gray-900">Step 2:</strong> Provide your original service receipt or 
                      invoice. We keep records of all work, but having your paperwork helps speed up the process.
                    </p>
                    <p>
                      <strong className="text-gray-900">Step 3:</strong> Our technicians will inspect the issue to 
                      determine if it's covered under warranty.
                    </p>
                    <p>
                      <strong className="text-gray-900">Step 4:</strong> If approved, we'll repair or replace the 
                      item at no charge to you. If not covered, we'll provide a quote for the repair.
                    </p>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-900 font-semibold mb-2">Questions about warranty coverage?</p>
                    <p className="text-gray-700">Phone: 03 341 7675</p>
                    <p className="text-gray-700">Email: info@tyres2go.net.nz</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-red text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Quality Work, Guaranteed
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Experience the peace of mind that comes with MTA-backed warranty protection
              </p>
              <a
                href="tel:033417675"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-red font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Us Today
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Warranty;
