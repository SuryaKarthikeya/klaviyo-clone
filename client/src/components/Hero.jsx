import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ data, logoStrip }) => {
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

  return (
    <>
    <div className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* ── Full-screen background video ── */}
      {data.videoUrl && (
        <video
          src={data.videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* ── Dark gradient overlay for text readability ── */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)'
        }}
      />

      {/* ── Hero content on top ── */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 flex flex-col justify-center" style={{ minHeight: '100vh', paddingTop: '7rem', paddingBottom: '5rem' }}>

        <motion.div
          className="flex flex-col items-start text-left max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {data.badge && (
            <motion.div variants={itemVariants} className="mb-6">
              <a href="#" className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-colors">
                <span className="mr-2 px-2 py-0.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider">New</span>
                {data.badge.replace('New: ', '')} &rarr;
              </a>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="font-serif text-[3.5rem] leading-[1.05] lg:text-[5rem] font-medium tracking-tight text-white mb-6"
          >
            {data.headline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-[1.25rem] text-white/80 mb-10 font-normal max-w-xl leading-relaxed"
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
              className="flex-1 px-5 py-4 border border-white/30 rounded bg-white/10 backdrop-blur-sm text-white placeholder-white/60 text-lg focus:outline-none focus:border-white/70 transition-colors"
            />
            <a href={data.primaryCTA?.url || "#"} className="px-8 py-4 rounded bg-realify-blue text-white font-medium text-lg hover:bg-blue-700 transition-all duration-300 whitespace-nowrap text-center">
              {data.primaryCTA?.label || "Sign up"}
            </a>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-sm text-white/50">
            No credit card required.
          </motion.p>
        </motion.div>

      </div>
    </div>

    {/* ── Logo Strip — separate section BELOW the video ── */}
    {logoStrip && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-realify-bg border-b border-gray-200 py-10"
      >
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-xs font-bold text-gray-400 uppercase mb-8 tracking-widest">
            {logoStrip.label}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {logoStrip.logos?.map((logo, index) => {
              const localImages = ["/assets/klaviyo/logo_1.png", "/assets/klaviyo/logo_2.png", "/assets/klaviyo/logo_3.png"];
              const fallbackImg = localImages[index % localImages.length];
              return (
                <a key={logo._id || index} href={logo.url} target="_blank" rel="noreferrer">
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="h-7 md:h-9 w-auto object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500"
                    onError={(e) => { e.target.src = fallbackImg; }}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    )}
    </>
  );
};

export default Hero;
