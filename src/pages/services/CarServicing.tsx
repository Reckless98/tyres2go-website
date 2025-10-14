import { Gauge, Shield, Wrench, Check, Clock, Award } from 'lucide-react';
import ServicePageTemplate from '../../components/common/ServicePageTemplate';

const CarServicing = () => {
  const features = [
    {
      title: 'Full Service',
      description: 'Comprehensive inspection covering engine, transmission, brakes, suspension, and all major systems',
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: 'Interim Service',
      description: 'Mid-interval service between full services to keep your vehicle in top condition',
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: 'Manufacturer Service',
      description: 'Service according to manufacturer specifications to maintain your warranty',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Fleet Servicing',
      description: 'Professional fleet management and servicing for business vehicles',
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: 'Pre-Purchase Inspection',
      description: 'Thorough inspection before you buy to identify potential issues',
      icon: <Check className="w-6 h-6" />,
    },
    {
      title: 'Fast Turnaround',
      description: 'Most services completed same day with courtesy cars available',
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  const benefits = [
    'Experienced MTA-certified technicians',
    'All makes and models serviced',
    'Manufacturer warranty maintained',
    'Genuine and quality aftermarket parts',
    'Digital service records',
    'Courtesy cars available',
    'Transparent pricing - no hidden costs',
    'Free pickup and delivery available',
  ];

  const relatedServices = [
    { title: 'WOF Inspection', link: '/services/wof' },
    { title: 'Brake Repairs', link: '/services/brakes' },
    { title: 'Engine Diagnostics', link: '/services/engine-repair' },
  ];

  return (
    <ServicePageTemplate
      title="Professional Car Servicing in Christchurch"
      description="Expert car servicing for all makes and models. MTA-certified technicians, manufacturer warranties maintained, 6 convenient locations."
      features={features}
      benefits={benefits}
      relatedServices={relatedServices}
      seoTitle="Car Servicing Christchurch | Vehicle Service | Tyres2Go"
      seoDescription="Professional car servicing in Christchurch. Full service, interim service, fleet servicing. MTA-certified. All makes & models. Book online or call 03 341 7675"
      pricing={{
        title: 'Service Packages for Every Budget',
        description: 'From basic oil changes to comprehensive full services',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
          Our Service Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Basic Service</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Oil & filter change</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Fluid level checks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Visual brake inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Tyre pressure check</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Battery test</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">Every 6 months or 10,000km</p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-6 border-2 border-secondary/30 transform scale-105">
            <div className="bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Full Service</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Everything in Basic Service</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Replace air filter</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Replace cabin filter</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Brake system check</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Steering & suspension</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Full safety inspection</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">Every 12 months or 15,000km</p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Major Service</h3>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Everything in Full Service</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Replace spark plugs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Transmission fluid service</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Coolant replacement</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Timing belt check</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Comprehensive diagnostics</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500">As per manufacturer schedule</p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default CarServicing;
