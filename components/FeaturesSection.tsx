import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Cloud-Based Solutions',
    description: 'Utilize our advanced cloud technology for seamless data management and storage.',
    icon: <i className="fas fa-cloud text-purple-600"></i>,
  },
  {
    title: 'Automated Cleaning Processes',
    description: 'Leverage automation to enhance efficiency and effectiveness in cleaning operations.',
    icon: <i className="fas fa-robot text-purple-600"></i>,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Monitor cleaning tasks and outcomes in real-time with our intuitive dashboard.',
    icon: <i className="fas fa-eye text-purple-600"></i>,
  },
  {
    title: 'Customer Feedback Integration',
    description: 'Incorporate customer feedback to continuously improve our services.',
    icon: <i className="fas fa-comments text-purple-600"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">Our Technology Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-purple-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;