import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { LayoutDashboard, Type, Image as ImageIcon, BarChart3, ListChecks, MessageSquare, PlusSquare, CreditCard, Menu } from 'lucide-react';
import HeroForm from './components/HeroForm';
import StatsForm from './components/StatsForm';
import LogoStripForm from './components/LogoStripForm';
import TestimonialsForm from './components/TestimonialsForm';
import NavbarForm from './components/NavbarForm';
import FeaturesForm from './components/FeaturesForm';
import IntegrationsForm from './components/IntegrationsForm';
import PricingForm from './components/PricingForm';
import FooterForm from './components/FooterForm';

function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/homepage');
      const json = await res.json();
      setData(json);
    } catch (err) {
      toast.error('Failed to load data from server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (section, payload) => {
    const loadingToast = toast.loading('Saving changes...');
    try {
      const res = await fetch(`http://localhost:5000/api/${section}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Network response was not ok');
      toast.success('Saved successfully!', { id: loadingToast });
      
      // Update local state
      setData(prev => ({ ...prev, [section]: payload }));
      
    } catch (error) {
      toast.error('Error saving changes', { id: loadingToast });
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">Loading CMS...</div>;
  }

  const tabs = [
    { id: 'navbar', label: 'Navigation', icon: <Menu className="w-5 h-5" /> },
    { id: 'hero', label: 'Hero Section', icon: <Type className="w-5 h-5" /> },
    { id: 'stats', label: 'Stats Banner', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'logostrip', label: 'Logo Strip', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'features', label: 'Features', icon: <ListChecks className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'integrations', label: 'Integrations', icon: <PlusSquare className="w-5 h-5" /> },
    { id: 'pricing', label: 'Pricing', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'footer', label: 'Footer', icon: <Menu className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      <Toaster position="top-right" />
      
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold tracking-tight text-realify-blue flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6" />
            Admin Panel
          </h1>
          <p className="text-xs text-gray-500 mt-1">Realify.AI Content Manager</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                activeTab === tab.id 
                  ? 'bg-realify-blue/10 text-realify-blue' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <a href="http://localhost:3000" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            View Live Site &rarr;
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <header className="bg-white border-b border-gray-200 px-8 py-5">
          <h2 className="text-2xl font-semibold text-gray-800 capitalize">
            {tabs.find(t => t.id === activeTab)?.label}
          </h2>
        </header>
        
        <main className="p-8 max-w-4xl">
          {!data ? (
            <div className="bg-red-50 text-red-600 p-6 rounded-lg border border-red-200">
              <h3 className="font-bold mb-2">Error loading data</h3>
              <p>Could not connect to the backend server. Please ensure the backend is running on port 5000 and the database is seeded.</p>
            </div>
          ) : (
            <>
              {activeTab === 'navbar' && <NavbarForm data={data?.navbar} onSave={(payload) => handleSave('navbar', payload)} />}
              {activeTab === 'hero' && <HeroForm data={data?.hero} onSave={(payload) => handleSave('hero', payload)} />}
              {activeTab === 'stats' && <StatsForm data={data?.stats} onSave={(payload) => handleSave('stats', payload)} />}
              {activeTab === 'logostrip' && <LogoStripForm data={data?.logoStrip} onSave={(payload) => handleSave('logostrip', payload)} />}
              {activeTab === 'features' && <FeaturesForm data={data?.features} onSave={(payload) => handleSave('features', payload)} />}
              {activeTab === 'testimonials' && <TestimonialsForm data={data?.testimonials} onSave={(payload) => handleSave('testimonials', payload)} />}
              {activeTab === 'integrations' && <IntegrationsForm data={data?.integrations} onSave={(payload) => handleSave('integrations', payload)} />}
              {activeTab === 'pricing' && <PricingForm data={data?.pricing} onSave={(payload) => handleSave('pricing', payload)} />}
              {activeTab === 'footer' && <FooterForm data={data?.footer} onSave={(payload) => handleSave('footer', payload)} />}
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
