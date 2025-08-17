import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Alice Johnson', title: 'CEO', expertise: 'Software Development' },
  { name: 'Mark Smith', title: 'CTO', expertise: 'Cloud Solutions' },
  { name: 'Emily Davis', title: 'Lead Designer', expertise: 'UI/UX Design' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-purple-600 py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About CleanSSR
        </motion.h2>
        <motion.div
          className="text-lg text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          CleanSSR is at the forefront of technology-driven cleaning solutions. Our mission is to
          leverage innovative technologies to provide the highest quality cleaning services for both
          residential and commercial spaces. We believe that a clean environment is a pivotal part
          of a productive life and work ethic.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At CleanSSR, our mission is to utilize cutting-edge technology to revolutionize the cleaning
          industry. We are committed to sustainability and efficiency, ensuring that our methods reduce
          waste while maximizing cleanliness.
        </motion.p>
        <motion.div
          className="text-2xl font-semibold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-purple-600 text-white p-6 rounded-lg transform transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h4 className="text-xl font-bold mb-2">{member.name}</h4>
              <p className="text-lg mb-1">{member.title}</p>
              <p className="text-sm">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-lg text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          At CleanSSR, we value integrity, innovation, and excellence. Join us in our journey towards
          a cleaner, more efficient future.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;