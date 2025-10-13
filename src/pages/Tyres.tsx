import React, { useState } from 'react';
import { Search, Filter, AlertTriangle, Droplet, Navigation, Wrench, XCircle, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { tyreBrands, tyreServices, tyreReplacementGuidance } from '../config/businessData';

interface Tyre {
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  season: 'Summer' | 'Winter' | 'All-Season';
  image: string;
}

const Tyres: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');

  // Sample tyre data
  const tyres: Tyre[] = [
    { id: 1, brand: 'Michelin', model: 'Pilot Sport 4', size: '225/45R17', price: 299, season: 'Summer', image: '' },
    { id: 2, brand: 'Bridgestone', model: 'Turanza T005', size: '205/55R16', price: 249, season: 'All-Season', image: '' },
    { id: 3, brand: 'Continental', model: 'WinterContact', size: '215/60R16', price: 279, season: 'Winter', image: '' },
    { id: 4, brand: 'Goodyear', model: 'EfficientGrip', size: '195/65R15', price: 189, season: 'All-Season', image: '' },
    { id: 5, brand: 'Pirelli', model: 'P Zero', size: '245/40R18', price: 349, season: 'Summer', image: '' },
    { id: 6, brand: 'Dunlop', model: 'Sport Maxx RT', size: '225/50R17', price: 269, season: 'Summer', image: '' },
  ];

  const filteredTyres = tyres.filter((tyre) => {
    const matchesSearch =
      tyre.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tyre.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tyre.size.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeason = selectedSeason === 'all' || tyre.season === selectedSeason;
    
    return matchesSearch && matchesSeason;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-red to-primary-yellow text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Premium Tyres in Christchurch</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Over 25+ leading tyre brands. Expert fitting, wheel alignment, and mobile service across 6 locations. Your safety is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white shadow-md sticky top-[68px] z-40 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by brand, model, or size..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              <Filter size={20} className="text-gray-600" />
              <select
                aria-label="Filter by season"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={selectedSeason}
                onChange={(e) => setSelectedSeason(e.target.value)}
              >
                <option value="all">All Seasons</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="All-Season">All-Season</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tyres Grid */}
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredTyres.length} {filteredTyres.length === 1 ? 'tyre' : 'tyres'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTyres.map((tyre) => (
              <Card key={tyre.id} className="overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <p className="text-gray-500">[Tyre Image]</p>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                      {tyre.season}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading mb-1">{tyre.brand}</h3>
                  <p className="text-gray-600 mb-2">{tyre.model}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-4">Size: {tyre.size}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary-600">${tyre.price}</span>
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredTyres.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No tyres found matching your criteria.</p>
              <Button
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSeason('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Tyre Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Browse by Tyre Type</h2>
            <p className="text-xl text-gray-600">Find the perfect tyres for your vehicle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tyreServices.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Replace Tyres Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
              {tyreReplacementGuidance.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {tyreReplacementGuidance.intro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tyreReplacementGuidance.signs.map((sign, index) => {
              const iconMap: { [key: string]: typeof AlertTriangle } = {
                Gauge,
                Droplet,
                Navigation,
                AlertTriangle,
                Tool: Wrench,
                XCircle,
              };
              const IconComponent = iconMap[sign.icon] || AlertTriangle;
              
              return (
                <motion.div
                  key={sign.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 bg-primary-red rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{sign.title}</h3>
                    <p className="text-gray-600">{sign.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tyre Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">Quality Tyre Brands</h2>
            <p className="text-xl text-gray-600">We stock 25+ leading tyre brands</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tyreBrands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center hover:border-primary-red transition-colors"
              >
                <span className="font-heading font-bold text-gray-700">{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">Professional Fitting</h3>
              <p className="text-gray-600">
                Expert tyre fitting with state-of-the-art equipment at all our locations.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">Hunter Laser Alignment</h3>
              <p className="text-gray-600">
                9 Hunter Laser wheel alignment machines - the most advanced technology available.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">Mobile Service</h3>
              <p className="text-gray-600">
                We come to you! Mobile tyre fitting and balancing 7 days a week across Christchurch.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tyres;
