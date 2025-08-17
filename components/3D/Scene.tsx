import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

interface SceneProps {
  title: string;
  description: string;
}

const Scene: React.FC<SceneProps> = ({ title, description }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Canvas className="w-full h-full">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        
        {/ Replace with 3D models and interactive elements /}
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#6a0dad" />
        </mesh>
        
        <Html center>
          <motion.div
            className="bg-white p-5 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-purple-700 text-3xl font-bold">{title}</h1>
            <p className="text-gray-700 mt-2">{description}</p>
          </motion.div>
        </Html>
      </Canvas>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <Scene 
        title="Welcome to CleanSSR" 
        description="Your innovative solution for a cleaner technology environment." 
      />
      <div className="mt-8">
        <h2 className="text-purple-700 text-2xl font-semibold">What We Offer</h2>
        <p className="text-gray-600 mt-2">
          At CleanSSR, we specialize in providing cutting-edge cleaning solutions tailored for the tech industry. Our services ensure that your devices and environments remain spotless and operational, enhancing productivity and longevity.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-purple-700 text-2xl font-semibold">Client Reviews</h2>
        <ul className="list-disc list-inside mt-2">
          <li className="text-gray-600">"CleanSSR transformed our workspace!" - Tech Innovators</li>
          <li className="text-gray-600">"Efficient and professional service!" - Code Creators</li>
          <li className="text-gray-600">"Highly recommend for tech companies!" - Digital Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default App;