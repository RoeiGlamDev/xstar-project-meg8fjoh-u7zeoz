import { useRef } from 'react';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

const FloatingElement = () => {
  const ref = React.useRef();
  useFrame(() => {
    if (ref.current) {
      ref.current.position.y = Math.sin(Date.now()  0.002)  0.5;
    }
  });

  return (
    <a.mesh ref={ref} position={[0, 0, 0]} scale={0.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#6F2C91" />
    </a.mesh>
  );
};

const FloatingElements = () => {
  return (
    <Canvas
      style={{ height: ''100vh'', width: ''100%'', background: ''white' '}}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingElement />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

const CleanSSRWebsite = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-purple-900">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold">Welcome to CleanSSR</h1>
        <p className="mt-4 text-lg">Your Technology-Driven Cleaning Solutions</p>
      </header>
      <main className="flex-grow flex flex-col items-center">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="mt-2 text-lg">
            At CleanSSR, we utilize cutting-edge technology to provide efficient and eco-friendly cleaning solutions tailored to your needs.
          </p>
        </section>
        <FloatingElements />
        <section className="mb-10">
          <h2 className="text-3xl font-semibold">Customer Reviews</h2>
          <div className="mt-4 space-y-4">
            <motion.div
              className="p-4 border border-purple-500 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <p>"CleanSSR transformed our office space with their innovative cleaning technology!"</p>
              <span className="block text-sm text-gray-600">- Alex J.</span>
            </motion.div>
            <motion.div
              className="p-4 border border-purple-500 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <p>"Impressive service! The attention to detail is unmatched."</p>
              <span className="block text-sm text-gray-600">- Sarah L.</span>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="text-center py-5 bg-purple-700 text-white w-full">
        <p>&copy; {new Date().getFullYear()} CleanSSR. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CleanSSRWebsite;