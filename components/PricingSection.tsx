import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Tech Support',
    price: '$49/month',
    features: ['24/7 Support', 'Remote Assistance', 'Software Updates'],
  },
  {
    name: 'Pro Tech Solutions',
    price: '$99/month',
    features: ['All Basic Features', 'System Optimization', 'Cloud Backups'],
  },
  {
    name: 'Enterprise Suite',
    price: '$199/month',
    features: ['All Pro Features', 'Custom Solutions', 'Dedicated Account Manager'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">CleanSSR Pricing Plans</h2>
        <p className="text-lg text-gray-700 mb-12">Choose the best technology service plan for your needs.</p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-purple-700 mb-4">{tier.price}</p>
              <ul className="mb-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;