import { Disc, AlertTriangle, Zap, Shield, CheckCircle, Clock } from 'lucide-react';
import ServicePageTemplate from '../../components/common/ServicePageTemplate';

const BrakeRepairs = () => {
  const features = [
    {
      title: 'Brake Pad Replacement',
      description: 'Quality brake pads installed by expert technicians for optimal stopping power',
      icon: <Disc className="w-6 h-6" />,
    },
    {
      title: 'Brake Disc Machining',
      description: 'Professional resurfacing of brake discs for smooth, even braking',
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: 'Brake Fluid Service',
      description: 'Complete brake fluid flush and replacement to maintain system performance',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'ABS Diagnostics',
      description: 'Advanced diagnostics for anti-lock braking systems',
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      title: 'Brake Line Repairs',
      description: 'Repair or replacement of brake lines and hoses',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Same-Day Service',
      description: 'Most brake repairs completed the same day',
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const benefits = [
    'Safety-first approach to all brake work',
    'Quality parts with warranty',
    'Latest diagnostic equipment',
    'Experienced brake specialists',
    'Free brake inspections with service',
    'Competitive pricing',
    'All makes and models',
    'Courtesy cars available',
  ];

  return (
    <ServicePageTemplate
      title="Expert Brake Repairs & Service"
      description="Professional brake repairs in Christchurch. From brake pads to complete system overhauls. Safety is our priority."
      features={features}
      benefits={benefits}
      seoTitle="Brake Repairs Christchurch | Brake Service | Tyres2Go"
      seoDescription="Expert brake repairs in Christchurch. Brake pads, discs, fluid service. Fast, reliable service. Book online or call 03 341 7675"
      pricing={{
        title: 'Affordable Brake Repairs',
        description: 'Competitive prices with no compromise on safety',
      }}
      relatedServices={[
        { title: 'Car Servicing', link: '/services/car-servicing' },
        { title: 'WOF Inspection', link: '/services/wof' },
        { title: 'Suspension Repairs', link: '/services/suspension' },
      ]}
    />
  );
};

export default BrakeRepairs;
