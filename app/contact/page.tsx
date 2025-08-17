import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-purple-700">
      <motion.div
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h1>

      <form onSubmit={handleSubmit} className="bg-purple-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-purple-300 focus:outline-none focus:ring focus:ring-purple-500 rounded-md w-full py-2 px-3"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-purple-300 focus:outline-none focus:ring focus:ring-purple-500 rounded-md w-full py-2 px-3"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="border border-purple-300 focus:outline-none focus:ring focus:ring-purple-500 rounded-md w-full py-2 px-3"
            rows={4}
          />
        </div>
        
        <motion.div
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-200"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Business Hours</h2>
        <p className="mt-2">Monday - Friday: 9 AM - 6 PM</p>
        <p>Saturday: 10 AM - 4 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold">Our Location</h2>
        <p className="mt-2">123 Clean Tech Ave, Suite 456</p>
        <p>Tech City, TC 12345</p>
      </div>
    </div>
  );
};

export default ContactPage;