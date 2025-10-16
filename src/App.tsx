import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/common/ScrollProgress';
import FloatingActions from './components/common/FloatingActions';
import Home from './pages/Home';
import Tyres from './pages/Tyres';
import AutoServices from './pages/AutoServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQs from './pages/FAQs';
import PaymentOptions from './pages/PaymentOptions';
import Offers from './pages/Offers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Warranty from './pages/Warranty';

// Service Pages
import WOFService from './pages/services/WOFService';
import CarServicing from './pages/services/CarServicing';
import BrakeRepairs from './pages/services/BrakeRepairs';
import WheelAlignment from './pages/services/WheelAlignment';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollProgress />
        <FloatingActions />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tyres" element={<Tyres />} />
              <Route path="/auto-services" element={<AutoServices />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/payment-options" element={<PaymentOptions />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/warranty" element={<Warranty />} />
              
              {/* Service Pages */}
              <Route path="/services/wof" element={<WOFService />} />
              <Route path="/services/car-servicing" element={<CarServicing />} />
              <Route path="/services/brakes" element={<BrakeRepairs />} />
              <Route path="/services/wheel-alignment" element={<WheelAlignment />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
