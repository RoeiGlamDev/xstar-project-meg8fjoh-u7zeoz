import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white bg-opacity-30">
          <motion.div
            initial={{ opacity: 0, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
          >
            <h2 className="text-purple-600 text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{content}</p>
            <button
              onClick={onClose}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;