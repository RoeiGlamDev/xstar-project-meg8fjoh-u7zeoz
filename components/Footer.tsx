import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: Array<{ name: string; href: string }>;
  socialMedia: Array<{ name: string; href: string; icon: JSX.Element }>;
}

const Footer: React.FC<FooterProps> = () => {
  const companyName = "CleanSSR";
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const socialMedia = [
    { name: 'Facebook', href: '#', icon: <i className="fab fa-facebook-f"></i> },
    { name: 'Twitter', href: '#', icon: <i className="fab fa-twitter"></i> },
    { name: 'LinkedIn', href: '#', icon: <i className="fab fa-linkedin-in"></i> },
  ];

  return (
    <motion.footer 
      className="bg-white text-purple-700 p-6"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">{companyName}</h2>
        <div className="flex space-x-6 mb-4">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-purple-500 transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          {socialMedia.map(media => (
            <a 
              key={media.name} 
              href={media.href} 
              className="text-purple-500 hover:text-purple-700 transition duration-300"
              aria-label={media.name}
            >
              {media.icon}
            </a>
          ))}
        </div>
        <p className="text-sm mt-4">© {new Date().getFullYear()} {companyName}. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;