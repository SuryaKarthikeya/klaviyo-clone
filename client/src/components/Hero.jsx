import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data, logoStrip }) => {
  // Graceful fallback if data is somehow missing
  if (!data) return null;

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

  // Helper to fallback to our premium scraped image if the API returns a generic path
  const heroImage = data.backgroundImage && data.backgroundImage.includes('hero-bg') 
    ? "/assets/klaviyo/hero.webp" 
    : data.backgroundImage;

  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-realify-bg">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text Content */}
          <motion.div 
            className="lg:w-1/2 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {data.badge && (
              <motion.div variants={itemVariants} className="mb-6">
                <a href="#" className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-300 bg-transparent text-gray-800 text-sm font-medium hover:border-gray-400 transition-colors">
                  <span className="mr-2 px-2 py-0.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">New</span>
                  {data.badge.replace('New: ', '')} &rarr;
                </a>
              </motion.div>
            )}

            <motion.h1 
              variants={itemVariants}
              className="font-serif text-[4rem] leading-[1.05] lg:text-[5.5rem] font-medium tracking-tight text-realify-dark mb-6"
            >
              {data.headline}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-[1.35rem] text-gray-700 mb-10 font-normal max-w-2xl leading-relaxed"
            >
              {data.subHeadline}
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <input 
                type="email" 
                placeholder="Work email" 
                className="flex-1 px-5 py-4 border border-gray-300 rounded bg-white text-lg focus:outline-none focus:border-realify-blue transition-colors"
              />
              <a href={data.primaryCTA?.url || "#"} className="px-8 py-4 rounded bg-realify-blue text-white font-medium text-lg hover:bg-blue-700 transition-all duration-300 whitespace-nowrap text-center">
                {data.primaryCTA?.label || "Sign up"}
              </a>
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
            <div className="relative rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
              <img 
                src={heroImage} 
                alt="Realify.AI Agentic Marketing" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.src = "/assets/klaviyo/hero.webp"; }}
              />
            </div>
          </motion.div>
        </div>
        
        {/* Logos Section */}
        {logoStrip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-32 pt-10"
          >
            <p className="text-sm font-bold text-gray-800 uppercase mb-8 text-center tracking-wider">
              {logoStrip.label}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {logoStrip.logos?.map((logo, index) => {
                // Fallback mapping for exact visual match if their seeded logos fail
                const localImages = ["/assets/klaviyo/logo_1.png", "/assets/klaviyo/logo_2.png", "/assets/klaviyo/logo_3.png"];
                const fallbackImg = localImages[index % localImages.length];
                
                return (
                  <a key={logo._id || index} href={logo.url} target="_blank" rel="noreferrer">
                    <img 
                      src={logo.imageUrl} 
                      alt={logo.name} 
                      className="h-8 md:h-12 w-auto object-contain opacity-50 grayscale hover:grayscale-0 transition-all duration-500" 
                      onError={(e) => { e.target.src = fallbackImg; }}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Hero;
