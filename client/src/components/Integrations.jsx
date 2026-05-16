import React from 'react';
import { motion } from 'framer-motion';

const Integrations = ({ data }) => {
  if (!data || !data.integrations) return null;

  return (
    <div className="py-24 bg-klaviyo-bg border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-klaviyo-dark mb-4">{data.sectionTitle}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16">
          {data.integrations.map((item, i) => {
            // Provide a static fallback if the seeded image path is fake
            const localLogos = ["/assets/klaviyo/logo_1.png", "/assets/klaviyo/logo_2.png", "/assets/klaviyo/logo_3.png"];
            const fallbackLogo = localLogos[i % localLogos.length];

            return (
              <motion.a
                href={item.url || "#"}
                key={item._id || item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-6 hover:shadow-lg transition-all"
                title={item.name}
              >
                <img 
                  src={item.logoUrl} 
                  alt={item.name} 
                  className="w-full h-auto max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                  onError={(e) => { e.target.src = fallbackLogo; }}
                />
              </motion.a>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: data.integrations.length * 0.1 }}
            className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full border border-gray-200 border-dashed flex items-center justify-center flex-col cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl md:text-3xl font-bold text-gray-400">+{data.totalCount ? data.totalCount.replace('+', '') : '350'}</span>
            <span className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wider">More</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
