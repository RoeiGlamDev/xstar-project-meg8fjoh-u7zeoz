import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterProps> = ({ title, description }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission logic
    setSubmitted(true);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-10">
      <motion.div
        className="text-purple-600 text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="text-gray-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white rounded-r-md px-4 py-2 hover:bg-purple-500 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      ) : (
        <motion.div
          className="text-green-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to CleanSSR!
        </motion.p>
      )}
    </section>
  );
};

export default NewsletterSection;