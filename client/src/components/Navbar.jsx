import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Globe, Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  const navLinks = [
    { name: 'Platform', hasDropdown: true },
    { name: 'Channels', hasDropdown: true },
    { name: 'Features', hasDropdown: true },
    { name: 'Resources', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
  ];

  const DropdownContent = ({ title }) => (
    <div className="max-w-7xl mx-auto px-8 py-10 flex gap-12">
      <div className="w-1/4">
        <h4 className="text-gray-900 font-bold mb-4 text-lg">{title} Overview</h4>
        <ul className="space-y-3">
          {['The B2C CRM', 'Klaviyo AI (K:AI)', 'Klaviyo Marketing', 'Klaviyo Service'].map(item => (
            <li key={item}><a href="#" className="text-gray-600 hover:text-black font-medium transition-colors block">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="w-1/4 border-l border-gray-200 pl-8">
        <h4 className="text-gray-900 font-bold mb-4 text-lg">Top Products</h4>
        <ul className="space-y-3">
          {['Composer (BETA)', 'Marketing Agent', 'Customer Agent', 'Helpdesk'].map(item => (
            <li key={item}><a href="#" className="text-gray-600 hover:text-black font-medium transition-colors block">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 bg-gray-50 rounded-xl p-8 border border-gray-100 flex items-center group cursor-pointer">
        <div className="flex-1 pr-6">
          <p className="text-sm font-bold text-red-600 uppercase tracking-widest mb-2">Spotlight</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">The Klaviyo omniverse</h3>
          <p className="text-gray-600 mb-4">One platform. Every channel. Real results.</p>
          <span className="inline-flex items-center text-black font-bold group-hover:underline">Explore <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
        </div>
        <div className="w-48 h-32 bg-white rounded shadow-sm border border-gray-200 flex items-center justify-center">
           <span className="text-gray-400 font-medium">Image</span>
        </div>
      </div>
    </div>
  );

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || activeMenu || isMobileOpen ? 'bg-klaviyo-bg shadow-md py-4' : 'bg-klaviyo-bg/80 backdrop-blur-md py-6'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center">
          
          {/* Logo & Links */}
          <div className="flex items-center gap-10">
            <a href="/" className="text-4xl font-bold tracking-tighter text-black lowercase">
              klaviyo
            </a>
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group h-full py-2"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                >
                  <button className="flex items-center text-sm font-semibold text-gray-800 group-hover:text-black transition-colors relative">
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className={`ml-1.5 w-4 h-4 text-gray-400 transition-transform duration-200 ${activeMenu === link.name ? 'rotate-180' : ''}`} />
                    )}
                    {/* Hover Red Underline */}
                    <span className="absolute -bottom-6 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-gray-600 hover:text-black transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-black transition-colors flex items-center text-sm font-semibold">
              <Globe className="w-4 h-4 mr-1.5" />
              EN
            </button>
            <a href="/login" className="text-sm font-semibold text-gray-800 hover:text-black transition-colors relative group">
              Log in
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="/demo" className="text-sm font-bold text-black border-2 border-black px-5 py-2.5 rounded hover:bg-black hover:text-white transition-all duration-300">
              Get a demo
            </a>
            <a href="/signup" className="text-sm font-bold text-white bg-blue-600 px-5 py-3 rounded hover:bg-blue-700 transition-colors shadow-sm">
              Sign up
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-black" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl"
          >
            <DropdownContent title={activeMenu} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="py-2 border-b border-gray-50 text-lg font-bold text-gray-800">
                  {link.name}
                </div>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <a href="/login" className="text-center font-bold text-gray-800">Log in</a>
                <a href="/demo" className="text-center font-bold border-2 border-black py-3 rounded">Get a demo</a>
                <a href="/signup" className="text-center font-bold text-white bg-blue-600 py-3 rounded">Sign up</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
