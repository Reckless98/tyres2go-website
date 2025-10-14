import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Car, Wrench, Zap, Disc, Gauge, CheckCircle, FileCheck,
  Battery, Lightbulb, Speaker, AlertCircle, Wind, Droplet,
  Shield, Truck, TrendingUp, Repeat, Navigation, Settings
} from 'lucide-react';
import SEO from '../components/common/SEO';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  category: 'tyres' | 'mechanical' | 'electrical';
}

const Services = () => {
  const services: Service[] = [
    // Tyre Services
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Passenger Tyres',
      description: 'Quality tyres for cars and sedans from leading brands',
      link: '/services/tyres/passenger',
      category: 'tyres',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: '4WD & SUV Tyres',
      description: 'Rugged tyres for off-road and all-terrain vehicles',
      link: '/services/tyres/suv-4wd',
      category: 'tyres',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'High Performance Tyres',
      description: 'Premium tyres for sports cars and performance vehicles',
      link: '/services/tyres/high-performance',
      category: 'tyres',
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Wheel Alignment',
      description: 'Precision 4-wheel alignment to extend tyre life',
      link: '/services/wheel-alignment',
      category: 'tyres',
    },
    {
      icon: <Disc className="w-8 h-8" />,
      title: 'Wheel Balancing',
      description: 'Computer balancing to eliminate vibrations',
      link: '/services/wheel-balancing',
      category: 'tyres',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Puncture Repairs',
      description: 'Fast, reliable puncture repairs for all tyre types',
      link: '/services/puncture-repairs',
      category: 'tyres',
    },
    {
      icon: <Repeat className="w-8 h-8" />,
      title: 'Tyre Rotation',
      description: 'Regular rotation for even wear and longer life',
      link: '/services/tyre-rotation',
      category: 'tyres',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Nitrogen Inflation',
      description: 'Premium nitrogen filling for better performance',
      link: '/services/nitrogen-inflation',
      category: 'tyres',
    },

    // Mechanical Services
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Car Servicing',
      description: 'Comprehensive servicing for all makes and models',
      link: '/services/car-servicing',
      category: 'mechanical',
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'WOF Inspection',
      description: 'MTA-certified Warrant of Fitness inspections',
      link: '/services/wof',
      category: 'mechanical',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Brake Repairs',
      description: 'Expert brake service, pads, discs, and fluid',
      link: '/services/brakes',
      category: 'mechanical',
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: 'Suspension Repairs',
      description: 'Smooth ride with professional suspension service',
      link: '/services/suspension',
      category: 'mechanical',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Transmission Service',
      description: 'Transmission repairs and fluid service',
      link: '/services/transmission',
      category: 'mechanical',
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Engine Repairs',
      description: 'Diagnostic and repair services for all engines',
      link: '/services/engine-repair',
      category: 'mechanical',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Exhaust & Mufflers',
      description: 'Exhaust system repairs and replacements',
      link: '/services/exhaust',
      category: 'mechanical',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Oil Changes',
      description: 'Fast oil and filter changes with quality products',
      link: '/services/oil-change',
      category: 'mechanical',
    },

    // Electrical Services
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Battery Service',
      description: 'Battery testing, charging, and replacement',
      link: '/services/battery',
      category: 'electrical',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Lighting Repairs',
      description: 'Headlights, tail lights, and indicator repairs',
      link: '/services/lighting',
      category: 'electrical',
    },
    {
      icon: <Speaker className="w-8 h-8" />,
      title: 'Sound System & Alarm',
      description: 'Audio system installation and alarm fitting',
      link: '/services/sound-system',
      category: 'electrical',
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: 'Dash Warning Lights',
      description: 'Diagnostics and repairs for warning lights',
      link: '/services/dash-warning',
      category: 'electrical',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Auto Electrical',
      description: 'Complete electrical diagnostics and repairs',
      link: '/services/auto-electrical',
      category: 'electrical',
    },
  ];

  const tyreServices = services.filter(s => s.category === 'tyres');
  const mechanicalServices = services.filter(s => s.category === 'mechanical');
  const electricalServices = services.filter(s => s.category === 'electrical');

  const ServiceCard = ({ service }: { service: Service }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link
        to={service.link}
        className="block bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/20"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </Link>
    </motion.div>
  );

  return (
    <>
      <SEO
        title="Our Services - Tyres & Auto Repairs | Tyres2Go Christchurch"
        description="Complete automotive services in Christchurch. Tyres, mechanical repairs, WOF, servicing, brakes, suspension, and more. 6 convenient locations."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full filter blur-3xl"></div>
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
              <ServiceCard key={service.title} service={service} />
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
              <ServiceCard key={service.title} service={service} />
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
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
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
