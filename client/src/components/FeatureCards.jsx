import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeatureCards = () => {
  return (
    <div className="py-32 bg-klaviyo-bg">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-4xl md:text-[4rem] leading-tight font-medium text-klaviyo-dark mb-6 tracking-tight"
          >
            Autonomous agents that do the work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            With the autonomous B2C CRM, turn your marketing, analytics, and service into always-on growth engines.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Marketing Agent Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer"
          >
            <div className="p-12 pb-8 flex-grow">
              <h3 className="text-4xl font-bold text-black mb-6">Marketing Agent</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                Start fast, launch faster with just your URL. In minutes, Marketing Agent learns from your website and builds on-brand campaigns, key flows, and your first form to get you growing.
              </p>
              <span className="inline-flex items-center text-blue-600 font-bold text-lg">
                Explore Marketing Agent 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
            <div className="bg-[#fcfaf8] p-8 pt-0 flex justify-center mt-auto">
              <div className="w-full rounded-xl overflow-hidden shadow-sm transform group-hover:scale-[1.02] transition-transform duration-500">
                <img src="/assets/klaviyo/marketing_agent.webp" alt="Marketing Agent UI" className="w-full h-auto object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Customer Agent Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer"
          >
            <div className="p-12 pb-8 flex-grow">
              <h3 className="text-4xl font-bold text-black mb-6">Customer Agent</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                Support with selling power. Customer Agent resolves 65% of questions autonomously. And because it has the full customer picture, it also recommends and converts, driving revenue.
              </p>
              <span className="inline-flex items-center text-blue-600 font-bold text-lg">
                Explore Customer Agent 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </div>
            <div className="bg-[#fff5f2] p-12 flex justify-center items-center mt-auto min-h-[300px]">
                {/* Abstract UI representation */}
                <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-8 border border-[#ffb19b]/30 transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#ffb19b] flex items-center justify-center text-black font-bold text-xl">K</div>
                    <div className="space-y-2">
                       <div className="h-4 w-32 bg-gray-200 rounded"></div>
                       <div className="h-3 w-20 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-full bg-gray-100 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center">
                     <div className="h-4 w-16 bg-gray-200 rounded"></div>
                     <div className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded shadow-sm">Resolved</div>
                  </div>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
