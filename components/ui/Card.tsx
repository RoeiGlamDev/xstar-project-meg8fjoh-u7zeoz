import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  content: string;
  review: string;
}

const Card: React.FC<CardProps> = ({ title, content, review }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-purple-600 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-white mb-4">{content}</p>
      <p className="text-purple-400 italic">"{review}"</p>
    </motion.div>
  );
};

export default Card;