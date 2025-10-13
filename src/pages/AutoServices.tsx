import React from 'react';
import { Wrench, Settings, Gauge, Droplet, Car, Shield } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  price: string;
}

const AutoServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: Wrench,
      title: 'General Servicing',
      description: 'Comprehensive vehicle servicing including oil change, filter replacement, and multi-point inspection.',
      price: 'From $150',
    },
    {
      id: 2,
      icon: Settings,
      title: 'Brake Service',
      description: 'Complete brake system inspection, pad replacement, and disc machining for optimal safety.',
      price: 'From $120',
    },
    {
      id: 3,
      icon: Gauge,
      title: 'Wheel Alignment',
      description: 'Precision wheel alignment to improve handling, tire wear, and fuel efficiency.',
      price: 'From $80',
    },
    {
      id: 4,
      icon: Droplet,
      title: 'Oil Change',
      description: 'Quick oil change service using quality oils suitable for your vehicle.',
      price: 'From $60',
    },
    {
      id: 5,
      icon: Car,
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics to identify and resolve engine issues quickly.',
      price: 'From $90',
    },
    {
      id: 6,
      icon: Shield,
      title: 'WOF Inspection',
      description: 'Thorough Warrant of Fitness inspection to ensure your vehicle meets safety standards.',
      price: '$60',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Auto Services</h1>
          <p className="text-xl text-secondary-100 max-w-2xl">
            Professional vehicle servicing and repairs by certified technicians.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of auto services to keep your vehicle running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-heading mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-secondary-600">{service.price}</span>
                    <Button size="sm">Book Now</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose JT Auto Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            Why Choose JT Auto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <span className="text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Certified Technicians</h3>
              <p className="text-gray-600">
                All our technicians are fully qualified and experienced.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <span className="text-3xl font-bold">⚡</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Fast Service</h3>
              <p className="text-gray-600">
                Quick turnaround times without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <span className="text-3xl font-bold">💰</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Fair Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-100 text-secondary-600 rounded-full mb-4">
                <span className="text-3xl font-bold">🛡️</span>
              </div>
              <h3 className="text-xl font-heading mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All work comes with our satisfaction guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Book Your Service Today
          </h2>
          <p className="text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
            Get your vehicle serviced by our expert team. Book online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="w-full sm:w-auto bg-white text-secondary-600 hover:bg-gray-100">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-secondary-600">
              Call Us: +64 123 456 789
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutoServices;
