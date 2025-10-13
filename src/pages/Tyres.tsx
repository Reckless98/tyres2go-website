import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

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
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-heading mb-4">Premium Tyres</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Find the perfect tyres for your vehicle from our extensive range of quality brands.
          </p>
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

      {/* Info Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-heading mb-3">Free Fitting</h3>
              <p className="text-gray-600">
                Professional tyre fitting included with every purchase at no extra cost.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading mb-3">Price Match Guarantee</h3>
              <p className="text-gray-600">
                Found a better price? We'll match it and give you an extra discount.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-heading mb-3">Expert Advice</h3>
              <p className="text-gray-600">
                Not sure which tyres to choose? Our experts are here to help you decide.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tyres;
