import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import SEO from '../components/common/SEO';
import Card from '../components/common/Card';
import { tyreServices, mechanicalServices, electricalServices } from '../data/services';

const Services = () => {
  // Helper to get icon component from string
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : <Icons.Wrench className="w-8 h-8" />;
  };

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="p-6 h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-primary-red/20">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-secondary rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
          {getIcon(service.icon)}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-red transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </Card>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Our Services - Tyres & Auto Repairs | Tyres2Go Christchurch"
        description="Complete automotive services in Christchurch. Tyres, mechanical repairs, WOF, servicing, brakes, suspension, and more. 6 convenient locations."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-red to-secondary text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-red rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive automotive solutions for all your vehicle needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tyre Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              Tyre Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From new tyres to maintenance and repairs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tyreServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              Mechanical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert mechanical repairs and servicing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mechanicalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              Auto Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete electrical diagnostics and repairs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-red text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 font-heading">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Give us a call - we offer many more specialized services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:033417675"
                className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105"
              >
                Call 03 341 7675
              </a>
              <Link
                to="/contact"
                className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
