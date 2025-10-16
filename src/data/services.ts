/**
 * Centralized Service Data for Tyres2Go
 * 
 * This file contains all service information from both Tyres2Go and JT Auto (now merged).
 * Services are organized by category: Tyre Services, Mechanical Services, and Electrical Services.
 */

export interface Service {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: 'tyres' | 'mechanical' | 'electrical';
  icon: string; // Icon name from lucide-react
  featured?: boolean;
}

// All Tyres2Go Services
export const allServices: Service[] = [
  // ==================== TYRE SERVICES ====================
  {
    id: 1,
    name: 'Passenger Tyres',
    slug: 'passenger-tyres',
    description: 'Quality tyres for your family car from trusted brands. Wide range of sizes and budgets.',
    category: 'tyres',
    icon: 'Car',
    featured: true,
  },
  {
    id: 2,
    name: '4WD / SUV Tyres',
    slug: '4wd-suv-tyres',
    description: 'Robust tyres for your 4WD and SUV vehicles. Built for on-road comfort and off-road capability.',
    category: 'tyres',
    icon: 'Truck',
    featured: true,
  },
  {
    id: 3,
    name: 'High Performance Tyres',
    slug: 'high-performance-tyres',
    description: 'Premium tyres for enhanced performance and handling. Perfect for sports cars and performance vehicles.',
    category: 'tyres',
    icon: 'Zap',
    featured: true,
  },
  {
    id: 4,
    name: 'Budget Tyres',
    slug: 'budget-tyres',
    description: 'Quality budget-friendly tyre options without compromising on safety.',
    category: 'tyres',
    icon: 'DollarSign',
  },
  {
    id: 5,
    name: 'Fuel Efficient Tyres',
    slug: 'fuel-efficient-tyres',
    description: 'Eco-friendly tyres designed to save you money on fuel with lower rolling resistance.',
    category: 'tyres',
    icon: 'Leaf',
  },
  {
    id: 6,
    name: 'Run Flat Tyres',
    slug: 'run-flat-tyres',
    description: 'Safety tyres that keep you moving after a puncture. Peace of mind on every journey.',
    category: 'tyres',
    icon: 'Shield',
  },
  {
    id: 7,
    name: 'Van / Light Truck Tyres',
    slug: 'van-light-truck-tyres',
    description: 'Durable tyres for commercial vehicles, vans, and light trucks. Built to handle heavy loads.',
    category: 'tyres',
    icon: 'TruckIcon',
  },
  {
    id: 8,
    name: 'Wheel Alignment',
    slug: 'wheel-alignment',
    description: 'Precision wheel alignment for optimal tyre performance using Hunter laser technology.',
    category: 'tyres',
    icon: 'Settings',
    featured: true,
  },
  {
    id: 9,
    name: 'Wheel Balancing',
    slug: 'wheel-balancing',
    description: 'Professional balancing for a smooth, vibration-free ride.',
    category: 'tyres',
    icon: 'Activity',
  },
  {
    id: 10,
    name: 'Puncture Repairs',
    slug: 'puncture-repairs',
    description: 'Quick and reliable puncture repair services. Most repairs completed within 30 minutes.',
    category: 'tyres',
    icon: 'Wrench',
  },
  {
    id: 11,
    name: 'Tyre Rotation',
    slug: 'tyre-rotation',
    description: 'Extend tyre life with regular rotation. Ensures even wear across all tyres.',
    category: 'tyres',
    icon: 'RefreshCw',
  },
  {
    id: 12,
    name: 'Nitrogen Inflation',
    slug: 'nitrogen-inflation',
    description: 'Enhance tyre performance with nitrogen filling. Better pressure retention and longer life.',
    category: 'tyres',
    icon: 'Wind',
  },
  {
    id: 13,
    name: 'Mobile Tyre Service',
    slug: 'mobile-service',
    description: 'We come to you - home, office, anywhere in Christchurch. 7 days a week.',
    category: 'tyres',
    icon: 'MapPin',
    featured: true,
  },

  // ==================== MECHANICAL SERVICES ====================
  {
    id: 14,
    name: 'WOF Inspections',
    slug: 'wof-inspections',
    description: 'Comprehensive Warrant of Fitness inspections. MTA certified service ensuring your vehicle meets safety standards.',
    category: 'mechanical',
    icon: 'ClipboardCheck',
    featured: true,
  },
  {
    id: 15,
    name: 'General Vehicle Servicing',
    slug: 'vehicle-servicing',
    description: 'Complete vehicle servicing including oil change, filter replacement, and multi-point safety inspection.',
    category: 'mechanical',
    icon: 'Wrench',
    featured: true,
  },
  {
    id: 16,
    name: 'Oil & Filter Changes',
    slug: 'oil-filtration',
    description: 'Regular oil changes and filter replacements using quality oils suitable for your vehicle.',
    category: 'mechanical',
    icon: 'Droplet',
  },
  {
    id: 17,
    name: 'Brake Repairs',
    slug: 'brake-repairs',
    description: 'Complete brake system inspection, pad replacement, disc machining, and repairs for optimal safety.',
    category: 'mechanical',
    icon: 'Disc',
    featured: true,
  },
  {
    id: 18,
    name: 'Transmission Service',
    slug: 'transmission-service',
    description: 'Automatic, CVT, and manual transmission servicing to ensure smooth gear changes.',
    category: 'mechanical',
    icon: 'Cog',
  },
  {
    id: 19,
    name: 'Transmission Repairs',
    slug: 'transmission-repairs',
    description: 'Expert transmission diagnostics and repairs for all types of transmissions.',
    category: 'mechanical',
    icon: 'Cog',
  },
  {
    id: 20,
    name: 'Engine Repairs',
    slug: 'engine-repairs',
    description: 'Advanced engine diagnostics and repairs to restore your vehicle\'s performance.',
    category: 'mechanical',
    icon: 'Cpu',
  },
  {
    id: 21,
    name: 'Engine Flush',
    slug: 'engine-flush',
    description: 'Professional engine flush to remove sludge and improve engine performance.',
    category: 'mechanical',
    icon: 'Cpu',
  },
  {
    id: 22,
    name: 'Differential & Transfer Case',
    slug: 'differential-service',
    description: 'Front/rear differential and transfer case service for 4WD and SUV vehicles.',
    category: 'mechanical',
    icon: 'Settings',
  },
  {
    id: 23,
    name: 'Power Steering Service',
    slug: 'power-steering-flush',
    description: 'Power steering fluid replacement for smooth steering operation.',
    category: 'mechanical',
    icon: 'Disc',
  },
  {
    id: 24,
    name: 'Radiator & Cooling System',
    slug: 'radiator-cooling',
    description: 'Radiator repairs, replacements, and cooling system maintenance. Coolant flush and refill.',
    category: 'mechanical',
    icon: 'Thermometer',
  },
  {
    id: 25,
    name: 'Coolant Exchange',
    slug: 'coolant-exchange',
    description: 'Coolant system flush and refill to prevent overheating and corrosion.',
    category: 'mechanical',
    icon: 'Thermometer',
  },
  {
    id: 26,
    name: 'Exhaust & Muffler',
    slug: 'exhaust-muffler',
    description: 'Exhaust system repairs, muffler replacements, and emission testing.',
    category: 'mechanical',
    icon: 'Wind',
  },
  {
    id: 27,
    name: 'Suspension & Steering',
    slug: 'suspension-steering',
    description: 'Suspension repairs, shock absorber replacement, and steering system maintenance.',
    category: 'mechanical',
    icon: 'Minus',
  },
  {
    id: 28,
    name: 'Diesel Fuel Filters',
    slug: 'diesel-fuel-filters',
    description: 'Diesel fuel filter replacement to maintain optimal engine performance.',
    category: 'mechanical',
    icon: 'Filter',
  },
  {
    id: 29,
    name: 'Pre-Purchase Inspections',
    slug: 'pre-purchase-inspection',
    description: 'Comprehensive vehicle inspection before you buy to identify potential issues.',
    category: 'mechanical',
    icon: 'ClipboardCheck',
  },
  {
    id: 30,
    name: 'Heating & Air Conditioning',
    slug: 'heating-air-conditioning',
    description: 'Air conditioning repairs, re-gassing, and heating system maintenance.',
    category: 'mechanical',
    icon: 'Wind',
  },

  // ==================== ELECTRICAL SERVICES ====================
  {
    id: 31,
    name: 'Auto Electrical Repairs',
    slug: 'auto-electrical',
    description: 'Complete auto electrical diagnostics, wiring repairs, and electrical system maintenance.',
    category: 'electrical',
    icon: 'Zap',
    featured: true,
  },
  {
    id: 32,
    name: 'Battery Testing & Replacement',
    slug: 'batteries',
    description: 'Battery testing, replacement, and charging system diagnostics.',
    category: 'electrical',
    icon: 'Battery',
  },
  {
    id: 33,
    name: 'Lighting Repairs',
    slug: 'lighting-repair',
    description: 'Headlight, taillight, indicator, and interior lighting repairs and replacements.',
    category: 'electrical',
    icon: 'Lightbulb',
  },
  {
    id: 34,
    name: 'Air Conditioning Repair',
    slug: 'air-conditioning-repair',
    description: 'Complete air conditioning diagnostics, repairs, and re-gassing services.',
    category: 'electrical',
    icon: 'Wind',
  },
  {
    id: 35,
    name: 'Sound System & Alarm',
    slug: 'sound-system-alarm',
    description: 'Car audio system installation, repairs, and security alarm systems.',
    category: 'electrical',
    icon: 'Speaker',
  },
  {
    id: 36,
    name: 'Dash Warning Lights',
    slug: 'dash-warning-lights',
    description: 'Diagnostic services for dashboard warning lights and fault code reading.',
    category: 'electrical',
    icon: 'AlertTriangle',
  },
  {
    id: 37,
    name: 'Hybrid & Electric Vehicle Services',
    slug: 'hybrid-electric-services',
    description: 'Specialized servicing for hybrid and electric vehicles.',
    category: 'electrical',
    icon: 'Zap',
  },
];

// Filter services by category
export const tyreServices = allServices.filter(s => s.category === 'tyres');
export const mechanicalServices = allServices.filter(s => s.category === 'mechanical');
export const electricalServices = allServices.filter(s => s.category === 'electrical');

// Get featured services (shown on homepage)
export const featuredServices = allServices.filter(s => s.featured);

// Helper function to get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return allServices.find(s => s.slug === slug);
};

// Helper function to get services by category
export const getServicesByCategory = (category: 'tyres' | 'mechanical' | 'electrical'): Service[] => {
  return allServices.filter(s => s.category === category);
};

export default allServices;
