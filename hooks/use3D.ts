import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook for creating 3D interactive elements for CleanSSR.
 * This hook initializes a Three.js scene and allows for custom 3D interactions.
 * 
 * @returns {Object} - Contains the ref to the DOM element for rendering and an update function.
 */
export const use3D = () => {
    const ref = useRef<HTMLDivElement>(null);
    const scene = useRef<THREE.Scene | null>(null);
    const camera = useRef<THREE.PerspectiveCamera | null>(null);
    const renderer = useRef<THREE.WebGLRenderer | null>(null);

    // Initialize Three.js scene
    useEffect(() => {
        if (ref.current) {
            // Create a scene
            scene.current = new THREE.Scene();
            // Create a camera
            camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.current.position.z = 5;

            // Create a renderer
            renderer.current = new THREE.WebGLRenderer({ antialias: true });
            renderer.current.setSize(window.innerWidth, window.innerHeight);
            ref.current.appendChild(renderer.current.domElement);

            // Set background color
            scene.current!.background = new THREE.Color(0xffffff);

            // Add lights
            const ambientLight = new THREE.AmbientLight(0x404040, 1);
            scene.current.add(ambientLight);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1).normalize();
            scene.current.add(directionalLight);

            // Create a simple geometry to showcase
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshStandardMaterial({ color: 0x800080 }); // Purple color for CleanSSR
            const cube = new THREE.Mesh(geometry, material);
            scene.current.add(cube);

            // Animation loop
            const animate = () => {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                renderer.current!.render(scene.current!, camera.current!);
            };
            animate();

            // Handle window resize
            const handleResize = () => {
                if (camera.current) {
                    camera.current.aspect = window.innerWidth / window.innerHeight;
                    camera.current.updateProjectionMatrix();
                }
                renderer.current!.setSize(window.innerWidth, window.innerHeight);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                ref.current!.removeChild(renderer.current!.domElement);
                renderer.current!.dispose();
            };
        }
    }, []);

    return { ref };
};