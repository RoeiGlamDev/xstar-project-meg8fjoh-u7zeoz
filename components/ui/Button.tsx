import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  const baseClasses = 'px-4 py-2 rounded focus:outline-none focus:ring-2 transition duration-300';
  const primaryClasses = 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500';
  const secondaryClasses = 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-100 focus:ring-purple-300';

  const classes = ${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses};

  return (
    <motion.div
      className="classes"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={typeof children === 'string' ? children : 'Button'}
    >
      {children}
    </motion.button>
  );
};

export default Button;