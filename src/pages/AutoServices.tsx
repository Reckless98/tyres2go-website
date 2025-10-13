import React from 'react';
import { 
  Wrench, Settings, Droplet, Car, Shield, Cog, Cpu, Wind, 
  Lightbulb, Zap, Speaker, AlertTriangle, Battery, Thermometer, 
  CheckCircle, Clock, Users, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { autoServices, companyValues } from '../config/businessData';

const AutoServices: React.FC = () => {
  // Group services by category
  const servicingServices = autoServices.filter(s => s.category === 'servicing');
  const repairsServices = autoServices.filter(s => s.category === 'repairs');
  const electricalServices = autoServices.filter(s => s.category === 'electrical');

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: typeof Wrench } = {
      ClipboardCheck: Shield,
      Wrench,
      Droplet,
      Cog,
      Settings,
      Cpu,
      Disc: Settings,
      Thermometer,
      Filter: Settings,
      Wind,
      Minus: Settings,
      Lightbulb,
      Zap,
      Speaker,
      AlertTriangle,
      Battery,
    };
    return iconMap[iconName] || Wrench;
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
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Automotive Services & Repairs</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Comprehensive car repairs, WOF inspections, and vehicle servicing by qualified mechanics. 
              Serving Christchurch with over 15 years of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicing Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Vehicle Servicing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regular servicing keeps your vehicle running smoothly and safely. We recommend a comprehensive check every 6 months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicingServices.map((service, index) => {
              const Icon = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-red rounded-full mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mechanical Repairs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Mechanical Repairs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert repairs for all makes and models. From brakes to transmissions, we've got you covered.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairsServices.map((service, index) => {
              const Icon = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-yellow rounded-full mb-4">
                      <Icon className="w-7 h-7 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Electrical Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Auto Electrical Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete electrical diagnostics and repairs for modern vehicles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricalServices.map((service, index) => {
              const Icon = getIconComponent(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-red rounded-full mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
              Why Choose JT Automotive?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyValues.jtAuto.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.jtAuto.values.slice(0, 4).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-red rounded-full mb-4">
                  {index === 0 && <Users className="w-8 h-8 text-white" />}
                  {index === 1 && <Car className="w-8 h-8 text-white" />}
                  {index === 2 && <Clock className="w-8 h-8 text-white" />}
                  {index === 3 && <CheckCircle className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {companyValues.jtAuto.values.slice(4, 7).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <h3 className="text-lg font-heading font-bold mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Check Advice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8 bg-gradient-to-r from-primary-red/5 to-primary-yellow/5 border-2 border-primary-red">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">Safety Check Recommendation</h3>
                  <p className="text-lg text-gray-700">
                    {companyValues.jtAuto.safetyAdvice}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-red to-primary-yellow text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Book Your Service Today
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get your vehicle serviced by our qualified mechanics. We're here to help keep you safe on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary-red hover:bg-gray-100">
                Contact Us
              </Button>
              <a href="tel:033417674" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary-red transition-colors">
                Call: 03 341 7674
              </a>
            </div>
            
            <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4">
              <Award className="w-8 h-8" />
              <span className="text-xl font-bold">MTA Certified with Dealer Warranty</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutoServices;
