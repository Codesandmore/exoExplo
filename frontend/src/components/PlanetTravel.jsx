import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import planetimage from '../assets/pl1.png'
import spaceImage from '../assets/space.jpg';

const PlanetTravel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create the planet (sphere)
    const geometry = new THREE.SphereGeometry(3, 64, 64); // Sphere radius, width segments, height segments
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(planetimage); // Path to your planet texture
    const material = new THREE.MeshStandardMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(ambientLight);
    scene.add(pointLight);

    camera.position.z = 10; // Set camera distance

    // Rotation control variables
    let mouseX = 0, mouseY = 0;

    // Event listener for mouse movement
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to -1 to 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to -1 to 1
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the planet based on mouse position
      planet.rotation.y += 0.01; // Auto-rotation
      planet.rotation.x = mouseY * 0.5; // Rotate based on mouseY
      planet.rotation.y += mouseX * 0.5; // Rotate based on mouseX

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        margin: 0,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${spaceImage}) center/cover no-repeat`,
        overflow: 'hidden',
      }}
    >
      <div
        id="instructions"
        style={{
          position: 'fixed',
          bottom: '20px',
          color: 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'Arial, sans-serif',
          textAlign: 'center',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        Move cursor to control rotation
      </div>
    </div>
  );
};

export default PlanetTravel;