import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  photo: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'CTO, Tech Innovators',
    photo: '/images/alice.jpg',
    content: 'CleanSSR transformed our data management processes, ensuring efficiency and reliability. Their technology is top-notch!',
    rating: 5
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'Product Manager, Future Solutions',
    photo: '/images/mark.jpg',
    content: 'The clean interface and smart functionalities from CleanSSR have streamlined our operations significantly.',
    rating: 4
  },
  {
    id: 3,
    name: 'Sophia Turner',
    role: 'CEO, NextGen Tech',
    photo: '/images/sophia.jpg',
    content: 'With CleanSSR, we’ve seen a remarkable increase in productivity. Their services are all about precision and innovation.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-8">What Our Clients Say About CleanSSR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-purple-50 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={testimonial.photo} alt={${testimonial.name}'s photo} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-purple-600">{testimonial.name}</h3>
              <p className="text-gray-500 italic mb-2">{testimonial.role}</p>
              <p className="text-gray-700">{testimonial.content}</p>
              <div className="flex mt-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.12-6.528L.244 7.91l6.62-.964L10 1l2.136 5.446 6.62.964-4.998 3.652 1.12 6.528L10 15z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;