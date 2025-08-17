import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Smart Cleaning Solutions',
    description: 'Utilizing AI technology to optimize cleaning processes for maximum efficiency.'
  },
  {
    title: 'Eco-Friendly Products',
    description: 'Committed to sustainability with our range of biodegradable cleaning agents.'
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Track your cleaning progress through our innovative platform with live updates.'
  }
];

const reviews = [
  {
    name: 'Jane Doe',
    comment: 'CleanSSR transformed our office space. Highly recommend their services!',
  },
  {
    name: 'John Smith',
    comment: 'The technology they use is top-notch. Our cleaning is now more efficient than ever!',
  },
  {
    name: 'Emily Johnson',
    comment: 'I love that they use eco-friendly products. Clean and green!',
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-purple-700">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-4xl font-bold">CleanSSR</h1>
      </header>
      
      <motion.section
        className="flex flex-col items-center justify-center h-screen bg-purple-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-semibold">Revolutionizing Cleaning Technology</h2>
        <p className="mt-4 text-lg">Experience the future of cleaning with CleanSSR's innovative solutions.</p>
      </motion.section>

      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-purple-100">
        <h3 className="text-3xl font-bold text-center mb-10">Client Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <p className="italic">"{review.comment}"</p>
              <p className="mt-4 font-bold text-right">- {review.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-6 text-center">
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;