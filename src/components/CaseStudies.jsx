import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    { stat: '65%', label: 'YoY growth in Klaviyo-attributed revenue', brand: 'Craftd London', image: '/assets/klaviyo/case_study_1.jpg' },
    { stat: '85%', label: 'increase in SMS revenue per recipient', brand: 'Dermalogica', image: '/assets/klaviyo/case_study_2.jpg' },
    { stat: '62%', label: 'of revenue attributed to Klaviyo', brand: 'Paul Smith', image: '/assets/klaviyo/case_study_3.jpg' },
    { stat: '19.4%', label: 'SMS click rate', brand: 'Castore', image: '/assets/klaviyo/case_study_1.jpg' },
    { stat: '7x', label: 'WhatsApp ROI in 4 months', brand: 'Jimmy Joy', image: '/assets/klaviyo/case_study_2.jpg' },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="py-32 bg-klaviyo-bg overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex justify-between items-end pb-4"
        >
          <h2 className="font-serif text-4xl md:text-[4rem] leading-tight font-medium text-klaviyo-dark max-w-3xl tracking-tight">
            Fueling growth for brands that don't settle
          </h2>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-colors">
              &larr;
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-black transition-colors">
              &rarr;
            </button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex space-x-6 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cases.map((study, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0 rounded-2xl p-10 snap-center cursor-pointer border border-transparent hover:border-blue-600 transition-all duration-300 group shadow-sm hover:shadow-xl flex flex-col justify-between relative overflow-hidden h-[600px]"
            >
              <div 
                className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
                style={{ 
                  backgroundImage: `url(${study.image})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
              
              <div className="relative z-20 mt-auto">
                <div className="mb-8">
                  <div className="text-[4rem] md:text-[5rem] font-bold text-white mb-2 leading-none tracking-tighter drop-shadow-md">{study.stat}</div>
                  <div className="text-xl md:text-2xl text-gray-200 font-medium leading-tight max-w-sm drop-shadow-sm">{study.label}</div>
                </div>
                <div className="flex justify-between items-center border-t border-white/20 pt-6">
                  <span className="font-bold text-white text-xl md:text-2xl uppercase tracking-widest">{study.brand}</span>
                  <span className="flex items-center text-white font-bold text-lg group-hover:text-klaviyo-peach transition-colors">
                    Read story
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
