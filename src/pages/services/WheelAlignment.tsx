import { Gauge, Disc, Car, Wrench, CheckCircle, Clock } from 'lucide-react';
import ServicePageTemplate from '../../components/common/ServicePageTemplate';

const WheelAlignment = () => {
  const features = [
    {
      title: '4-Wheel Alignment',
      description: 'Precision alignment for all four wheels using state-of-the-art equipment',
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: 'Wheel Balancing',
      description: 'Computer balancing to eliminate vibrations and extend tyre life',
      icon: <Disc className="w-6 h-6" />,
    },
    {
      title: 'All Vehicle Types',
      description: 'Alignment services for cars, SUVs, light trucks, and commercial vehicles',
      icon: <Car className="w-6 h-6" />,
    },
    {
      title: 'Suspension Inspection',
      description: 'Complete suspension check included with alignment service',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Digital Reports',
      description: 'Before and after alignment reports with precise measurements',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Fast Service',
      description: 'Most alignments completed in under an hour',
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const benefits = [
    'Latest Hunter alignment equipment',
    'Extend tyre life by up to 30%',
    'Improve fuel efficiency',
    'Better handling and control',
    'Reduce steering wheel vibration',
    'Prevent uneven tyre wear',
    'All makes and models',
    'Competitive pricing',
  ];

  return (
    <ServicePageTemplate
      title="Professional Wheel Alignment & Balancing"
      description="Precision wheel alignment services in Christchurch. Extend tyre life, improve handling, and enhance fuel efficiency."
      features={features}
      benefits={benefits}
      seoTitle="Wheel Alignment Christchurch | Wheel Balancing | Tyres2Go"
      seoDescription="Professional wheel alignment & balancing in Christchurch. State-of-the-art equipment, experienced technicians. Book online or call 03 341 7675"
      pricing={{
        title: 'Alignment Packages',
        description: 'Affordable pricing for all vehicle types',
      }}
      relatedServices={[
        { title: 'Tyre Fitting', link: '/services/tyre-fitting' },
        { title: 'Suspension Repairs', link: '/services/suspension' },
        { title: 'Puncture Repairs', link: '/services/puncture-repairs' },
      ]}
    />
  );
};

export default WheelAlignment;
