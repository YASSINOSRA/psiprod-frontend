import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;