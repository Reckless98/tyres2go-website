import React from 'react';
import { Tag, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';

const Offers: React.FC = () => {
  return (
    <>
      <SEO
        title="Special Offers & Deals | Tyres2Go Christchurch"
        description="Check out our latest tyre and automotive service specials in Christchurch. Quality services at competitive prices across all 6 locations."
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
              <Tag className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Special Offers
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Great deals on tyres and automotive services in Christchurch
              </p>
            </motion.div>
          </div>
        </section>

        {/* Current Offers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Current Promotions
              </h2>
              <p className="text-xl text-gray-600">
                Check back regularly for new deals and special offers
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-gray-50 to-white">
                  <div className="mb-6">
                    <Tag className="w-16 h-16 text-gray-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Great Value, Every Day
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    While we don't currently have special promotions running, we always offer competitive pricing 
                    on all our tyres and services. Contact us for a quote today!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <a
                      href="tel:033417675"
                      className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                    >
                      <Phone className="w-5 h-5" />
                      Call for a Quote
                    </a>
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 transition-all"
                    >
                      <MapPin className="w-5 h-5" />
                      Visit a Branch
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Everyday Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Value you can count on, whether there's a special offer or not
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Tag className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    Fair, honest pricing on all tyres and services. No hidden fees or surprises.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <Card className="p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Service</h3>
                  <p className="text-gray-600">
                    Quick turnaround times on most services. We value your time as much as you do.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <Card className="p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">6 Locations</h3>
                  <p className="text-gray-600">
                    Convenient branches across Christchurch, plus mobile service available.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary-red text-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Save on Your Next Service?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Call us today for a competitive quote on tyres, servicing, or repairs
              </p>
              <a
                href="tel:033417675"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-primary-red font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                03 341 7675
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Offers;
