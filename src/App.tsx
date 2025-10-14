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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
