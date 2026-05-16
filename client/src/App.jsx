import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import StatsBanner from './components/StatsBanner';
import CaseStudies from './components/CaseStudies';
import Integrations from './components/Integrations';
import Footer from './components/Footer';
import useHomepageData from './hooks/useHomepageData';

function App() {
  const { data, loading, error } = useHomepageData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-klaviyo-bg">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-klaviyo-dark rounded-full animate-spin mb-4"></div>
          <p className="text-klaviyo-dark font-medium">Loading Klaviyo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-klaviyo-bg">
        <div className="bg-red-50 text-red-600 p-6 rounded-lg shadow-sm border border-red-100 max-w-lg text-center">
          <h2 className="text-xl font-bold mb-2">Error loading data</h2>
          <p>{error}</p>
          <p className="text-sm mt-4 text-red-500">Ensure the backend server is running on port 5000.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-klaviyo-dark bg-klaviyo-bg">
      {/* 
        Pass respective data slices to each component. 
        Note: The seed data structure is mapped closely to what we need.
      */}
      <Navbar data={data.navbar} />
      <main>
        <Hero data={data.hero} logoStrip={data.logoStrip} />
        <FeatureCards data={data.features} />
        <StatsBanner data={data.stats} />
        <Integrations data={data.integrations} />
        <CaseStudies data={data.testimonials} />
      </main>
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
