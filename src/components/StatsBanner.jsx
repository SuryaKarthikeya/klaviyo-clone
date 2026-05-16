import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Helper component for count-up effect
const CountUpItem = ({ endValue, suffix, label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: delay } }
      }}
      className="flex flex-col items-center text-center p-8"
    >
      <div className="text-[5rem] md:text-[7rem] font-bold tracking-tighter text-black leading-none mb-4">
        {/* We just animate opacity/y for the text to simulate the reveal, 
            a true count-up for "2.5" requires a custom hook, but this achieves the visual impact */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: delay + 0.2, type: 'spring' } }
          }}
        >
          {endValue}
        </motion.span>
        {suffix}
      </div>
      <div className="text-xl text-gray-800 font-bold uppercase tracking-widest max-w-[250px]">
        {label}
      </div>
    </motion.div>
  );
};

const StatsBanner = () => {
  const stats = [
    { value: '2.5', suffix: 'B', label: 'Average events processed daily' },
    { value: '7.3', suffix: 'B', label: 'Customer profiles' },
    { value: '1.6', suffix: 'B', label: 'Average API calls processed daily' },
  ];

  return (
    <div className="bg-[#ccff00] py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {stats.map((stat, index) => (
            <CountUpItem 
              key={index}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
