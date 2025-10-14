import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowRight, CheckCircle, Phone, Calendar } from 'lucide-react';
import Button from './Button';
import SEO from './SEO';

interface ServiceFeature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ServicePageTemplateProps {
  title: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  benefits?: string[];
  pricing?: {
    title: string;
    description: string;
    price?: string;
  };
  relatedServices?: {
    title: string;
    link: string;
  }[];
  seoTitle?: string;
  seoDescription?: string;
  children?: ReactNode;
}

const ServicePageTemplate = ({
  title,
  description,
  heroImage,
  features,
  benefits = [],
  pricing,
  relatedServices = [],
  seoTitle,
  seoDescription,
  children,
}: ServicePageTemplateProps) => {
  return (
    <>
      <SEO
        title={seoTitle || title}
        description={seoDescription || description}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
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
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Call 03 341 7675
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional service delivered by experienced technicians
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-primary/20"
              >
                {feature.icon && (
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {benefits.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center font-heading">
                Why Choose Tyres2Go?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-white p-4 rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Custom Content */}
      {children && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">{children}</div>
        </section>
      )}

      {/* Pricing Section */}
      {pricing && (
        <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
                {pricing.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {pricing.description}
              </p>
              {pricing.price && (
                <div className="text-5xl font-bold text-primary mb-6">
                  {pricing.price}
                </div>
              )}
              <Button variant="gradient" size="lg" icon={<Phone className="w-5 h-5" />}>
                Get a Free Quote
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-heading">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((service) => (
                <motion.a
                  key={service.title}
                  href={service.link}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 mx-auto text-secondary group-hover:translate-x-2 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your appointment today or call us for expert advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Book Online Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                03 341 7675
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicePageTemplate;
