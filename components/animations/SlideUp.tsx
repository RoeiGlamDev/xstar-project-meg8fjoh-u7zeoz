import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-lg shadow-lg p-6 mb-4"
    >
      {children}
    </motion.div>
  );
};

export default SlideUp;