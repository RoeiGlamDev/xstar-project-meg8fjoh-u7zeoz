import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Sprite[] = [];
        const particleCount = 1000;
        const textureLoader = new THREE.TextureLoader();
        const particleTexture = textureLoader.load('/path/to/your/particle.png');

        for (let i = 0; i < particleCount; i++) {
            const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: particleTexture, color: 0x800080 }));
            sprite.position.set(Math.random()  2 - 1, Math.random()  2 - 1, Math.random() * 2 - 1);
            sprite.scale.set(0.05, 0.05, 1);
            scene.add(sprite);
            particles.push(sprite);
        }

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach(particle => {
                particle.position.x += (Math.random() - 0.5) * 0.01;
                particle.position.y += (Math.random() - 0.5) * 0.01;
            });
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            renderer.dispose();
            while (scene.children.length) {
                scene.remove(scene.children[0]);
            }
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
                className="flex flex-col items-center justify-center w-full h-full bg-white bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-purple-600">Welcome to CleanSSR</h1>
                <p className="mt-4 text-lg text-gray-700">Your technology partner in delivering clean and efficient solutions.</p>
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-purple-600">What We Offer</h2>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                        <li>Innovative Cleaning Technologies</li>
                        <li>Eco-friendly Solutions</li>
                        <li>Real-time Monitoring Systems</li>
                        <li>Customized Service Plans</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-purple-600">Client Reviews</h2>
                    <div className="mt-2 text-gray-600">
                        <p>"CleanSSR transformed our workspace with their state-of-the-art cleaning technology!" - TechCorp</p>
                        <p>"Impressive results and outstanding customer service!" - Innovatech</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;