import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  title: string;
  value: number;
  description: string;
}

const stats: Stat[] = [
  { title: 'Clients Served', value: 1200, description: 'Happy clients who trust CleanSSR for their technology cleaning needs.' },
  { title: 'Projects Completed', value: 950, description: 'Successfully completed projects that meet industry standards.' },
  { title: 'Awards Won', value: 15, description: 'Recognized for excellence in the technology cleaning industry.' },
  { title: 'Years in Business', value: 5, description: 'Five years of innovation and quality service in cleaning technology.' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Achievements of CleanSSR</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-purple-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-bold text-purple-600">{stat.value}</h3>
              <p className="text-xl text-gray-700">{stat.title}</p>
              <p className="mt-2 text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;