import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Transform Your Space with CleanSSR",
  description = "Experience the cutting-edge of cleanliness with our advanced technology solutions. CleanSSR leverages innovative cleaning methods to ensure your environment is not just clean, but pristine. Join us in redefining cleanliness.",
  buttonText = "Get Started",
  buttonLink = "/get-started"
}) => {
  return (
    <section className="flex flex-col items-center justify-center bg-white p-10 md:p-20">
      <motion.div 
        className="text-3xl md:text-4xl font-semibold text-purple-600 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div 
        className="text-lg text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.div 
        href={buttonLink}
        className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 ease-in-out"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </section>
  );
};

export default CTASection;