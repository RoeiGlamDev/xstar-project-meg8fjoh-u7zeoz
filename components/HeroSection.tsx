import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Welcome to CleanSSR", 
  subtitle = "Revolutionizing the cleaning industry with cutting-edge technology.", 
  ctaText = "Get Started", 
  ctaLink = "#get-started" 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <motion.div 
        className="text-5xl font-bold text-purple-700 mb-4"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div 
        className="text-xl text-gray-600 text-center max-w-xl mb-8"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <motion.div 
        href={ctaLink} 
        className="px-6 py-3 bg-purple-700 text-white rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
        initial={{ scale: 1 }} 
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.3 }}
      >
        {ctaText}
      </motion.a>
      <div className="mt-10">
        <motion.div 
          className="flex space-x-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-purple-600 font-semibold">Trusted by Industry Leaders</span>
          <span className="text-purple-600 font-semibold">5-Star Customer Reviews</span>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;