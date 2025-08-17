import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-purple-600 text-2xl font-bold">
            CleanSSR
          </h1>
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <motion.div
            href="#services"
            className="text-purple-600 hover:text-purple-800 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.a>
          <motion.div
            href="#reviews"
            className="text-purple-600 hover:text-purple-800 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Reviews
          </motion.a>
          <motion.div
            href="#contact"
            className="text-purple-600 hover:text-purple-800 transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="text-purple-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;