import { ClipboardCheck, Shield, Clock, CheckCircle2, FileCheck, AlertCircle } from 'lucide-react';
import ServicePageTemplate from '../../components/common/ServicePageTemplate';

const WOFService = () => {
  const features = [
    {
      title: 'Full WOF Inspection',
      description: 'Comprehensive 26-point safety inspection covering all essential vehicle components',
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      title: 'WOF Repairs',
      description: 'Expert repairs to ensure your vehicle passes WOF inspection first time',
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      title: 'Pre-Purchase Inspections',
      description: 'Thorough pre-purchase checks to give you peace of mind before buying',
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: 'Fast Turnaround',
      description: 'Most WOF inspections completed within 30-45 minutes',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: 'MTA Certified',
      description: 'All inspections carried out by MTA-certified technicians',
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
    {
      title: 'Detailed Reports',
      description: 'Receive detailed inspection reports with recommendations',
      icon: <AlertCircle className="w-6 h-6" />,
    },
  ];

  const benefits = [
    'MTA-certified technicians with years of experience',
    'Book online or walk in - your choice',
    '6 convenient locations across Christchurch',
    'Competitive pricing with transparent quotes',
    'Same-day WOF repairs available',
    'Courtesy cars available while we work on your vehicle',
    'All makes and models welcome',
    'Family-owned and operated since 2005',
  ];

  const relatedServices = [
    { title: 'Car Servicing', link: '/services/car-servicing' },
    { title: 'Brake Repairs', link: '/services/brakes' },
    { title: 'Pre-Purchase Inspection', link: '/services/pre-purchase-inspection' },
  ];

  return (
    <ServicePageTemplate
      title="Warrant of Fitness (WOF) Inspections"
      description="MTA-certified WOF inspections and repairs in Christchurch. Fast, reliable service at 6 convenient locations."
      features={features}
      benefits={benefits}
      relatedServices={relatedServices}
      seoTitle="WOF Inspections Christchurch | Warrant of Fitness | Tyres2Go"
      seoDescription="Get your WOF done right at Tyres2Go Christchurch. MTA-certified inspections, same-day repairs, 6 locations. Book online or walk in. Call 03 341 7675"
      pricing={{
        title: 'Transparent WOF Pricing',
        description: 'No hidden costs - competitive rates for all vehicle types',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
          What's Checked in a WOF?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Items</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Brakes, brake lines & brake fluid</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Steering & suspension systems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Tyres, wheels & wheel bearings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Lights, indicators & reflectors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Windscreen, wipers & washers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Structural Items</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Chassis, body & structure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Doors, bonnet & boot latches</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Seats & seatbelts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Exhaust system & emissions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Fuel system integrity</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-8 border-2 border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
            WOF Inspection Intervals
          </h3>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <strong className="text-primary min-w-[140px]">New Vehicles:</strong>
              <span>First WOF at 3 years, then annually</span>
            </p>
            <p className="flex items-start gap-3">
              <strong className="text-primary min-w-[140px]">Cars & Vans:</strong>
              <span>Annual WOF inspection required</span>
            </p>
            <p className="flex items-start gap-3">
              <strong className="text-primary min-w-[140px]">Older Vehicles:</strong>
              <span>Vehicles over 12 years may require 6-monthly inspections</span>
            </p>
          </div>
        </div>
      </div>
    </ServicePageTemplate>
  );
};

export default WOFService;
