import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsBanner = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  if (!data || !data.stats) return null;

  return (
    <div className="bg-realify-green py-24 border-y border-black relative overflow-hidden" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-black">
          
          {data.stats.map((stat, index) => (
            <div key={stat._id || index} className="pt-8 md:pt-0 first:pt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="text-6xl md:text-[5rem] font-medium tracking-tighter text-black mb-4 font-serif"
              >
                {stat.value}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
                className="text-xl font-bold uppercase tracking-widest text-black"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
