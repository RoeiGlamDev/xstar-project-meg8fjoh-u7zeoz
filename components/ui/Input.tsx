import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block text-purple-700 text-sm font-bold mb-2" htmlFor={label}>
        {label}
      </label>
      <motion.div
        className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : 'border-purple-300'
        }}
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
        required
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default Input;