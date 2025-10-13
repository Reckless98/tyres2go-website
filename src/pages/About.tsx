import React from 'react';
import Card from '../components/common/Card';

const About: React.FC = () => {
  const values = [
    {
      title: 'Quality',
      description: 'We never compromise on the quality of our products and services.',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent pricing and advice you can trust.',
    },
    {
      title: 'Excellence',
      description: 'Striving for excellence in everything we do.',
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">About Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Learn more about Tyres2Go & JT Auto and our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tyres2Go & JT Auto has been serving the Auckland community for over 15 years, 
                  providing quality tyres and professional auto services to thousands of satisfied customers.
                </p>
                <p>
                  What started as a small tyre shop has grown into a full-service automotive center, 
                  offering everything from tyre sales and fitting to comprehensive vehicle servicing and repairs.
                </p>
                <p>
                  Our success is built on a simple philosophy: provide honest service, quality products, 
                  and treat every customer like family. This approach has earned us a reputation as one 
                  of Auckland's most trusted automotive service providers.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">[Team Photo Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <h3 className="text-xl font-heading mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who keep your vehicle running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <Card key={member} className="overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">[Team Member Photo]</p>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading mb-1">Team Member {member}</h3>
                  <p className="text-primary-600 mb-3">Senior Technician</p>
                  <p className="text-gray-600 text-sm">
                    Certified professional with over 10 years of experience in automotive services.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            We're committed to providing exceptional service, quality products, and honest advice. 
            Your vehicle's performance and your satisfaction are our top priorities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <p className="text-primary-100">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p className="text-primary-100">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-primary-100">Tyres Fitted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
