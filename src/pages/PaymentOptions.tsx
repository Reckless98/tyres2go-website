import React from 'react';
import { CreditCard, Banknote, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import SEO from '../components/common/SEO';

const PaymentOptions: React.FC = () => {
  const paymentMethods = [
    {
      icon: Banknote,
      title: 'Cash',
      description: 'We accept cash payments at all our branches',
    },
    {
      icon: CreditCard,
      title: 'EFTPOS',
      description: 'Convenient EFTPOS payments available',
    },
    {
      icon: CreditCard,
      title: 'Credit Cards',
      description: 'We accept Visa, Mastercard, and American Express',
    },
    {
      icon: Smartphone,
      title: 'Contactless Payments',
      description: 'Apple Pay, Google Pay, and other tap-and-go options',
    },
  ];

  const paymentPlans = [
    'Flexible payment options available',
    'Discuss payment plans with our team',
    'Budget-friendly solutions for major services',
    'No hidden fees or charges',
  ];

  return (
    <>
      <SEO
        title="Payment Options | Tyres2Go Christchurch"
        description="Flexible payment options at Tyres2Go. We accept cash, EFTPOS, credit cards, and contactless payments. Payment plans available for major services."
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
              <CreditCard className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Payment Options
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Flexible and convenient payment methods to suit your needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Accepted Payment Methods
              </h2>
              <p className="text-xl text-gray-600">
                We make it easy for you to pay for our services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {paymentMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Plans */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                  Flexible Payment Plans
                </h2>
                <p className="text-xl text-gray-600">
                  We understand that vehicle maintenance can be a significant expense. That's why we offer flexible payment options.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="space-y-4">
                  {paymentPlans.map((plan, index) => (
                    <motion.div
                      key={plan}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{plan}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 text-center">
                    <strong>Note:</strong> Payment plan availability may vary by service type and amount. 
                    Please contact us to discuss your specific needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Questions About Payment?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team is happy to discuss payment options that work for you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:033417675"
                  className="inline-flex items-center justify-center gap-2 bg-primary-red hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  Call 03 341 7675
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 transition-all"
                >
                  Visit a Branch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PaymentOptions;
