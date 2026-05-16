import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import StatsBanner from './components/StatsBanner';
import CaseStudies from './components/CaseStudies';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-klaviyo-dark bg-klaviyo-bg">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <StatsBanner />
        <Integrations />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
