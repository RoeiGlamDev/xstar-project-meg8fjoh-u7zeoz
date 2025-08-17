import React from 'react';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$29/month',
    features: ['Cloud Data Storage', 'Automated Cleaning Reports', '24/7 Support']
  },
  {
    name: 'Pro',
    price: '$49/month',
    features: ['All Basic Features', 'Advanced Analytics Dashboard', 'Priority Support']
  },
  {
    name: 'Enterprise',
    price: '$99/month',
    features: ['All Pro Features', 'Custom Solutions', 'Dedicated Account Manager']
  }
];

const FAQs = [
  {
    question: 'What services does CleanSSR provide?',
    answer: 'CleanSSR offers a range of advanced cleaning technology solutions, including automated data management and analytics.'
  },
  {
    question: 'How can I get support?',
    answer: 'Our support team is available 24/7 via chat and email to assist you with any inquiries.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards and PayPal for your convenience.'
  }
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-purple-800 min-h-screen p-8">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CleanSSR Pricing Plans
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {pricingPlans.map((plan) => (
          <motion.div
            key={plan.name}
            className="bg-purple-100 p-6 rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
            <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300">
              Choose Plan
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {FAQs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-4 border border-purple-200 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <p>{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;