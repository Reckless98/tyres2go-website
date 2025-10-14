import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Wrench, Car, Shield, Clock, Star, Award, 
  Users, Phone, MapPin, Zap, Settings, Wind,
  Battery, Disc, Truck, Leaf
} from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
// import SEO from '../components/common/SEO';
import { tyreBrands, testimonials, businessStats } from '../config/businessData';
// import { seoConfig } from '../config/seo';

const Home: React.FC = () => {
  const mainServices = [
    {
      icon: Car,
      title: 'Premium Tyres',
      description: 'Extensive range of quality tyres from 25+ leading brands. Passenger, 4WD, SUV, performance, and commercial tyres.',
      link: '/tyres',
      gradient: 'from-primary-red to-primary-yellow',
    },
    {
      icon: Wrench,
      title: 'Auto Repairs & Servicing',
      description: 'Complete mechanical repairs, general servicing, brakes, transmission, engine work by certified technicians.',
      link: '/auto-services',
      gradient: 'from-primary-yellow to-secondary-dark',
    },
    {
      icon: Shield,
      title: 'WOF Inspections',
      description: 'Comprehensive Warrant of Fitness inspections and repairs. MTA certified. Keep your vehicle road-legal and safe.',
      link: '/auto-services',
      gradient: 'from-primary-red to-primary-dark',
    },
    {
      icon: Zap,
      title: 'Mobile Tyre Service',
      description: 'We come to you! Mobile tyre fitting and balancing at your home or office throughout Christchurch - 7 days a week.',
      link: '/contact',
      gradient: 'from-secondary to-secondary-dark',
    },
  ];

  const quickServices = [
    { icon: Settings, name: 'Wheel Alignment', slug: 'wheel-alignment' },
    { icon: Disc, name: 'Brake Repairs', slug: 'brakes' },
    { icon: Wind, name: 'Puncture Repairs', slug: 'puncture-repairs' },
    { icon: Battery, name: 'Batteries', slug: 'batteries' },
    { icon: Truck, name: '4WD/SUV Tyres', slug: '4wd-suv-tyres' },
    { icon: Leaf, name: 'Fuel Efficient Tyres', slug: 'fuel-efficient' },
  ];

  return (
    <>
      {/* <SEO 
        title="Quality Tyres & Auto Repairs in Christchurch"
        description="Tyres2Go offers premium tyre sales, wheel alignment, mobile tyre service, and full automotive repairs across 6 locations in Christchurch. MTA certified with 15+ years experience. Phone: 03 341 7675"
        keywords={['tyres christchurch', 'mobile tyre service', 'auto repairs christchurch', 'WOF christchurch', 'wheel alignment']}
      /> */}
      
      <div className="min-h-screen">
        {/* Hero Section with Tyres2Go Red & Yellow Theme */}
        <section className="relative bg-gradient-to-br from-primary-red via-primary-yellow to-secondary-dark text-white py-20 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 -left-4 w-72 h-72 bg-primary-yellow rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 -right-4 w-72 h-72 bg-secondary-dark rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-red rounded-full mix-blend-multiply filter blur-xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <Award className="w-4 h-4" />
                    MTA Certified • 15+ Years Experience • 6 Locations
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading">
                  Quality Tyres & Expert Auto Repairs in Christchurch
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-white/95">
                  From premium tyres to complete automotive services - your trusted partner for safe, reliable vehicle care across Canterbury.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.location.href = 'tel:033417675'}
                    className="bg-white text-primary-red hover:bg-gray-100 shadow-2xl hover:shadow-neon"
                    glow
                  >
                    <Phone className="w-5 h-5" />
                    Call 03 341 7675
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    as={Link}
                    to="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-red backdrop-blur-sm"
                  >
                    Book Mobile Service
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>6 Locations in Christchurch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>Open 7 Days • Mobile Service Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span>4.1 Google Rating</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-red mb-2">{businessStats.yearsExperience}</div>
                <div className="text-gray-600">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-yellow mb-2">{businessStats.locations}</div>
                <div className="text-gray-600">Service Centres</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-red mb-2">{businessStats.brandsAvailable}</div>
                <div className="text-gray-600">Tyre Brands</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-yellow mb-2">{businessStats.googleRating}</div>
                <div className="text-gray-600">Google Rating</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-4 text-gray-900 font-heading"
              >
                Our Services
              </motion.h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive automotive solutions for all your vehicle needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link to={service.link}>
                    <Card gradient hover className="h-full p-6 group">
                      <motion.div 
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:gradient-text transition-all">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                      <div className="flex items-center text-primary-red font-semibold group-hover:gap-2 transition-all">
                        Learn More
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Services with Glass Effect */}
        <section className="py-16 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red bg-[length:200%_100%] animate-gradient text-white relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center drop-shadow-lg"
            >
              Popular Services
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-5 text-center cursor-pointer group shadow-lg hover:shadow-2xl transition-all"
                >
                  <service.icon className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold">{service.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tyre Brands Showcase */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-heading">
                Premium Tyre Brands
              </h2>
              <p className="text-xl text-gray-600">
                We stock 25+ leading tyre brands to suit every budget and vehicle
              </p>
            </motion.div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
              {tyreBrands.slice(0, 21).map((brand, index) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-lg hover:bg-primary-red/5 transition-all cursor-pointer border-2 border-transparent hover:border-primary-yellow"
                >
                  <span className="font-semibold text-gray-700 text-sm text-center">{brand}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                as={Link}
                to="/tyres"
                className="border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white"
              >
                View All Brands
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-heading">
                Why Choose Tyres2Go?
              </h2>
              <p className="text-xl text-gray-600">
                Your trusted partner for quality automotive services in Christchurch
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-red to-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">MTA Certified</h3>
                <p className="text-gray-600">
                  Member of the New Zealand Motor Trade Association with full warranty backing
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-yellow to-secondary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
                <p className="text-gray-600">
                  Qualified mechanics with 15+ years of experience servicing all vehicle makes and models
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-red to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Service</h3>
                <p className="text-gray-600">
                  We come to you! Mobile tyre fitting available 7 days a week across Christchurch
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4 text-gray-900 font-heading">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600">
                Real reviews from real customers across Christchurch
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-100 hover:border-primary-yellow transition-colors">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary-yellow text-primary-yellow" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.service}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                as={Link}
                to="/about"
                className="border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-white"
              >
                Read More Reviews
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Locations CTA */}
        <section className="py-16 bg-gradient-to-br from-primary-red via-primary-yellow to-secondary-dark text-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <MapPin className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-4xl font-bold mb-4 font-heading">
                  6 Convenient Locations Across Christchurch
                </h2>
                <p className="text-xl mb-8 text-white/95">
                  Find your nearest Tyres2Go service centre or book our mobile service to come to you
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    as={Link}
                    to="/contact"
                    className="bg-white text-primary-red hover:bg-gray-100"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Find Your Nearest Branch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = 'tel:033417675'}
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-red"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call 03 341 7675
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                <p className="text-gray-300">Contact us today for a free quote on tyres or automotive services</p>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  as={Link}
                  to="/contact"
                  className="bg-primary-red hover:bg-primary-dark"
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = 'tel:033417675'}
                  className="border-2 border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-gray-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
