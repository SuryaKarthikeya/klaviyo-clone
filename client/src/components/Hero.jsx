import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-klaviyo-bg">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text Content */}
          <motion.div 
            className="lg:w-1/2 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <a href="#" className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-transparent text-gray-800 text-sm font-medium hover:border-gray-400 transition-colors">
                <span className="mr-2 px-2 py-0.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">New</span>
                Klaviyo expands Claude integration with agentic marketing &rarr;
              </a>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[4rem] leading-[1.05] lg:text-[5.5rem] font-medium tracking-tight text-klaviyo-dark mb-6"
            >
              The autonomous <br className="hidden md:block"/>
              B2C CRM
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-[1.35rem] text-gray-700 mb-10 font-normal max-w-2xl leading-relaxed"
            >
              Turn your marketing, analytics, and service into always-on growth engines. Personalise, learn from, and improve every customer experience across all your channels in real-time.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input 
                type="email" 
                placeholder="Work email" 
                className="flex-1 px-5 py-4 border border-gray-300 rounded bg-white text-lg focus:outline-none focus:border-klaviyo-blue transition-colors"
              />
              <button className="px-8 py-4 rounded bg-klaviyo-blue text-white font-medium text-lg hover:bg-blue-700 transition-all duration-300 whitespace-nowrap">
                Sign up
              </button>
            </motion.div>
            <motion.p variants={itemVariants} className="mt-4 text-sm text-gray-500">
              No credit card required.
            </motion.p>
          </motion.div>

          {/* Right Image/UI Content */}
          <motion.div 
            className="lg:w-1/2 relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center">
              <img 
                src="/assets/klaviyo/hero.webp" 
                alt="Klaviyo Agentic Marketing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 pt-10"
        >
          <p className="text-sm font-bold text-gray-800 uppercase mb-8 text-center tracking-wider">
            Powering 196,000+ relationship-driven brands across 100 countries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            <img src="/assets/klaviyo/logo_1.png" alt="Brand Logo" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/assets/klaviyo/logo_2.png" alt="Brand Logo" className="h-8 md:h-12 w-auto object-contain" />
            <img src="/assets/klaviyo/logo_3.png" alt="Brand Logo" className="h-8 md:h-12 w-auto object-contain" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
