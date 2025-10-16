import React from 'react';
import { Award, Shield, CheckCircle, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import { companyValues, businessStats } from '../config/businessData';

const About: React.FC = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-red to-secondary text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About Tyres2Go</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Christchurch's trusted partner for quality tyres and comprehensive automotive services. 
              Over 15 years of experience keeping Canterbury drivers safe on the road.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Combined Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Tyres2Go</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  {companyValues.tyres2go.description}
                </p>
                <p>
                  We're proud to be a local, MTA-certified tyre service centre with {businessStats.locations} locations 
                  across Christchurch and Canterbury. With {businessStats.brandsAvailable} leading tyre brands and 
                  state-of-the-art equipment including 9 Hunter Laser wheel alignment machines, we deliver exceptional 
                  service to every customer.
                </p>
                <p>
                  From mobile tyre fitting to wheel alignment, puncture repairs to nitrogen inflation, we provide 
                  comprehensive tyre solutions backed by transparent communication and honest advice.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-gray-900" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Automotive Services</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  In addition to our tyre expertise, Tyres2Go offers comprehensive automotive repair services at our Riccarton facility. We serve private car owners and commercial fleets with experienced mechanics and modern facilities.
                </p>
                <p>
                  We provide prompt WOF inspections, complete vehicle servicing, mechanical repairs, auto-electrical work, and specialist services for hybrid and electric vehicles. 
                  Our qualified mechanics are experienced with all makes and models - European, Japanese, American, and Korean vehicles.
                </p>
                <p>
                  {companyValues.tyres2go.safetyAdvice}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do across both brands
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {companyValues.tyres2go.values.slice(0, 3).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyValues.tyres2go.additionalValues.slice(0, 4).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
              {companyValues.combined.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyValues.combined.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {companyValues.combined.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4"
              >
                <CheckCircle className="w-6 h-6 text-primary-red flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-secondary text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're committed to providing exceptional service, quality products, and honest advice. 
              Your vehicle's performance and your satisfaction are our top priorities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{businessStats.yearsExperience}</div>
              <p className="text-white/90 text-lg">Years of Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{businessStats.locations}</div>
              <p className="text-white/90 text-lg">Locations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{businessStats.brandsAvailable}</div>
              <p className="text-white/90 text-lg">Tyre Brands</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{businessStats.googleRating}</div>
              <p className="text-white/90 text-lg">Google Rating</p>
            </motion.div>
          </div>

          {/* MTA Certification Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <Shield className="w-8 h-8" />
              <span className="text-xl font-bold">MTA Certified & Dealer Warranty</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
