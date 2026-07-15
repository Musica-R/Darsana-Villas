import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { useEffect } from 'react';

import './styles/global.css';

// import AnnounceBar from './components/AnnounceBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Venues from './pages/Venues';
import Stay from './pages/Stay';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Events from './pages/Events';
import MobileArrow from './components/MobileArrow';
import BottomNavbar from './components/BottomNavbar';

function AppContent() {

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }


  return (
    <>
      {/* <AnnounceBar /> */}
      <ScrollToTop />
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/event" element={<Events />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      <MobileArrow />
      <BottomNavbar />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


