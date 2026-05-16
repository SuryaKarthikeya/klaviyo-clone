import React from 'react';
import { motion } from 'framer-motion';

const Integrations = () => {
  return (
    <div className="py-24 bg-klaviyo-bg border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            KLAVIYO APP MARKETPLACE
          </p>
          <h2 className="text-4xl font-bold text-klaviyo-dark mb-6">
            Integrate with 350+ apps to seamlessly connect all of your data to Klaviyo
          </h2>
          <a href="#" className="text-lg font-semibold text-klaviyo-blue hover:underline">
            Explore apps &rarr;
          </a>
        </motion.div>

        {/* Logo Grid */}
        <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 opacity-70">
          <div className="text-2xl font-bold text-gray-800">Shopify</div>
          <div className="text-2xl font-bold text-gray-800">WooCommerce</div>
          <div className="text-2xl font-bold text-gray-800">BigCommerce</div>
          <div className="text-2xl font-bold text-gray-800">Salesforce</div>
          <div className="text-2xl font-bold text-gray-800">Magento</div>
          <div className="text-2xl font-bold text-gray-800">Wix</div>
        </div>

      </div>
    </div>
  );
};

export default Integrations;
