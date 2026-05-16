import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-klaviyo-dark text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Pre-footer Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-20 border-b border-gray-800 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Ready to grow?</h2>
            <p className="text-xl text-gray-400 font-normal">Join 196,000+ brands driving more revenue with Klaviyo.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded hover:bg-white hover:text-black transition-colors text-center">
              Get a demo
            </button>
            <button className="px-8 py-4 bg-blue-600 border-2 border-blue-600 text-white font-bold text-lg rounded hover:bg-blue-700 hover:border-blue-700 transition-colors shadow-lg text-center">
              Sign up
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16 py-20">
          
          <div className="col-span-2 lg:col-span-2 lg:pr-12">
            <a href="/" className="text-4xl font-bold tracking-tighter text-white block mb-8 lowercase">
              klaviyo
            </a>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-normal">
              Klaviyo is a unified customer platform that gives online brands direct ownership of their consumer data and interactions.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholder */}
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer border border-gray-700">In</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer border border-gray-700">Tw</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer border border-gray-700">Fb</div>
               <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer border border-gray-700">Ig</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-100">Platform</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Overview</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Klaviyo AI (K:AI)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Klaviyo Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Klaviyo Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Klaviyo Analytics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Klaviyo Data Platform</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-100">Channels</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Omnichannel Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Email marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">SMS marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">WhatsApp marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Mobile app marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">RCS for Business</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-100">Resources</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Help centre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Academy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Marketing calendar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-gray-100">Company</h4>
            <ul className="space-y-5">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors font-medium">Trust centre</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-500 gap-6">
          <div className="font-medium">
            &copy; {new Date().getFullYear()} Klaviyo. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#" className="hover:text-white transition-colors font-medium">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors font-medium">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
