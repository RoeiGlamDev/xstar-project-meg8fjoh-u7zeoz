import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: 'General Inquiry',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors: Partial<ContactFormData> = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is invalid';
    if (!formData.message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful form submission (e.g., API call)
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '', reason: 'General Inquiry' });
      setErrors({});
    }
  };

  return (
    <section className="bg-white py-10 px-5">
      <motion.div 
        className="text-3xl font-bold text-purple-600 text-center mb-6"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Contact CleanSSR
      </motion.h2>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-purple-600">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-600">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-600">Reason for Contact</label>
            <select 
              name="reason" 
              value={formData.reason} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Sales Inquiry">Sales Inquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-purple-600">Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-10 text-center">
        <h3 className="text-lg font-bold text-purple-600">Business Information</h3>
        <p className="text-gray-700">CleanSSR</p>
        <p className="text-gray-700">123 Tech Lane</p>
        <p className="text-gray-700">Innovation City, TX 75001</p>
        <p className="text-gray-700">Hours: Mon - Fri, 9 AM - 5 PM</p>
      </div>
    </section>
  );
};

export default ContactSection;