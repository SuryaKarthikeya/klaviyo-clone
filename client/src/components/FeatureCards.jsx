import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const renderIcon = (iconName) => {
  if (!iconName) {
    return <LucideIcons.Sparkles className="w-6 h-6 text-realify-dark" />;
  }

  const mapping = {
    email: 'Mail',
    sms: 'MessageSquare',
    analytics: 'BarChart3',
    service: 'LifeBuoy',
    integrations: 'Cpu'
  };

  const lookupName = mapping[iconName.toLowerCase()] || iconName;

  const camelCased = lookupName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');

  const IconComponent = LucideIcons[camelCased] || LucideIcons[lookupName] || LucideIcons.Sparkles;

  return <IconComponent className="w-6 h-6 text-realify-dark" />;
};

const FeatureCards = ({ data }) => {
  if (!data || !data.features) return null;

  return (
    <div className="py-32 bg-realify-bg">
      <div className="max-w-[1400px] mx-auto px-6">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-4xl md:text-[4rem] leading-tight font-medium text-realify-dark mb-6 tracking-tight"
          >
            {data.sectionTitle || 'Autonomous agents that do the work'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xl md:text-[1.35rem] text-gray-600 max-w-3xl mx-auto font-normal"
          >
            {data.sectionSubtitle || 'Turn your marketing, analytics, and service into always-on growth engines.'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {data.features.map((feature, index) => {
            // Provide fallback image to maintain our visual fidelity if API is generic
            const premiumFallback = index % 2 === 0 ? "/assets/klaviyo/marketing_agent.webp" : "/assets/agent_ui.png";

            return (
              <motion.div
                key={feature._id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer min-h-[420px]"
              >
                {/* ✅ Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${feature.imageUrl})` }}
                />
                {/* ✅ Dark overlay so text is readable */}
                <div className="absolute inset-0 bg-white/80 z-10" />

                {/* ✅ Content on top */}
                <div className="relative z-20 p-10 lg:p-14 flex-1">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
                    {renderIcon(feature.icon)}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    {feature.description}
                  </p>
                  <a href={feature.ctaUrl || "#"} className="inline-flex items-center text-lg font-bold text-realify-blue group-hover:text-blue-800 transition-colors">
                    {feature.ctaLabel} <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
