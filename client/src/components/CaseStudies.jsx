import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CaseStudies = ({ data }) => {
  const scrollContainerRef = useRef(null);

  if (!data || !data.testimonials) return null;

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
            {data.sectionTitle || "Loved by thousands of brands"}
          </h2>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              &larr;
            </button>
            <button 
              onClick={() => scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              &rarr;
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {data.testimonials.map((study, index) => {
          // Provide fallback images for the 1:1 visual match
          const fallbacks = [
            "/assets/klaviyo/case_study_1.jpg", 
            "/assets/klaviyo/case_study_2.jpg", 
            "/assets/klaviyo/case_study_3.jpg"
          ];
          const bgImage = fallbacks[index % fallbacks.length];
          
          return (
            <div 
              key={study._id || index} 
              className="min-w-[85vw] md:min-w-[600px] lg:min-w-[800px] h-[500px] md:h-[600px] rounded-3xl snap-center shrink-0 relative overflow-hidden group cursor-pointer"
            >
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${study.avatarUrl || bgImage})` }}
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-20 text-white">
                <div className="w-32 h-12 flex items-center">
                  {study.companyLogo ? (
                    <img src={study.companyLogo} alt={study.company} className="max-h-full object-contain filter brightness-0 invert" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                  ) : null}
                  <span style={{ display: study.companyLogo ? 'none' : 'block' }} className="text-xl font-bold tracking-widest uppercase">{study.company}</span>
                </div>
                
                <div>
                  <div className="flex gap-8 mb-6 border-b border-white/20 pb-6">
                    {study.metrics?.map((metric, i) => (
                      <div key={i}>
                        <div className="text-4xl md:text-5xl font-medium tracking-tighter mb-1">{metric.value}</div>
                        <div className="text-sm font-bold uppercase tracking-widest text-white/80">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-medium leading-tight mb-6 max-w-2xl">
                    "{study.quote}"
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white/80">
                      {study.authorName}, {study.authorRole} @ {study.company}
                    </p>
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform group-hover:translate-x-2 transition-transform">
                      &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudies;
