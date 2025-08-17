import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alice Johnson',
    position: 'CEO & Founder',
    image: '/images/alice.jpg',
    description: 'Alice is a visionary leader with over 10 years in the tech industry, dedicated to delivering innovative cleaning solutions.',
  },
  {
    name: 'Mark Thompson',
    position: 'CTO',
    image: '/images/mark.jpg',
    description: 'Mark brings a wealth of experience in technology development, focusing on creating efficient systems for CleanSSR.',
  },
  {
    name: 'Sarah Lee',
    position: 'Operations Manager',
    image: '/images/sarah.jpg',
    description: 'Sarah ensures that CleanSSR’s operations run smoothly, leveraging technology to enhance our services.',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-purple-700 min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold">About CleanSSR</h1>
        <p className="mt-4 text-lg">Innovating the cleaning industry with technology.</p>
      </header>
      <section className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold">Our History</h2>
          <p className="mt-2">
            CleanSSR was founded in 2020 with the mission to revolutionize the cleaning industry through advanced technology. Our goal is to provide seamless, efficient, and eco-friendly cleaning solutions, making a difference in both our clients' lives and the environment.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold">Our Values</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Innovation: Continuously improving our services and solutions.</li>
            <li>Integrity: Committing to transparency and trust in our operations.</li>
            <li>Customer-Centric: Placing our clients' needs at the forefront of our business.</li>
            <li>Sustainability: Focusing on eco-friendly practices in our cleaning processes.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-purple-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-purple-600">{member.position}</p>
                <p className="mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;