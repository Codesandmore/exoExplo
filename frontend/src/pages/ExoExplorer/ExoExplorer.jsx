import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import planetimage from '../../assets/pl1.png';
import spaceImage from '../../assets/space.jpg';

const PlanetTravel = () => {
  const mountRef = useRef(null);
  const [currentPlanet, setCurrentPlanet] = useState(null); // To track which planet is in view

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create multiple planets with the same texture
   

const planetsData = [
  { position: [ -489.14, 11.26, 172.83 ] },
  { position: [ 261.87, -241.46, -115.56 ] },
  { position: [ -131.58, 448.77, 316.07 ] },
  { position: [ 171.34, -54.84, -486.72 ] },
  { position: [ 417.50, 215.31, -275.00 ] },
  { position: [ -295.12, 386.11, 183.95 ] },
  { position: [ -85.28, -421.79, 200.52 ] },
  { position: [ 493.67, -60.53, 360.28 ] },
  { position: [ 329.62, -45.10, 129.37 ] },
  { position: [ -424.20, 277.56, -206.39 ] },
  { position: [ 99.99, 190.62, -414.34 ] },
  { position: [ -217.71, -314.73, -177.37 ] },
]
    const textureLoader = new THREE.TextureLoader();
    const planetTexture = textureLoader.load(planetimage);
    const planetGeometry = new THREE.SphereGeometry(44, 640  , 640);

    const planets = planetsData.map((data) => {
      const material = new THREE.MeshStandardMaterial({ map: planetTexture });
      const planet = new THREE.Mesh(planetGeometry, material);
      planet.position.set(...data.position);
      scene.add(planet);
      return { planet, ...data };
    });

    // Set up lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(ambientLight);
    scene.add(pointLight);

    camera.position.z = 20; // Initial camera position

    // Camera movement control (WASD keys)
    const moveSpeed = 5;
    let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'w': moveForward = true; break;
        case 's': moveBackward = true; break;
        case 'a': moveLeft = true; break;
        case 'd': moveRight = true; break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case 'w': moveForward = false; break;
        case 's': moveBackward = false; break;
        case 'a': moveLeft = false; break;
        case 'd': moveRight = false; break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Function to detect if a planet is in view
    const checkVisiblePlanet = () => {
      let closestPlanet = null;
      let closestDistance = Infinity;

      planets.forEach(({ planet, name }) => {
        const distance = camera.position.distanceTo(planet.position);
        if (distance < closestDistance && distance < 1500) {
          closestDistance = distance;
          closestPlanet = name;
        }
      });

      setCurrentPlanet(closestPlanet); // Update current planet in view
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Move camera
      if (moveForward) camera.position.z -= moveSpeed;
      if (moveBackward) camera.position.z += moveSpeed;
      if (moveLeft) camera.position.x -= moveSpeed;
      if (moveRight) camera.position.x += moveSpeed;

      // Rotate planets
      planets.forEach(({ planet }) => {
        planet.rotation.y += 0.01;
      });

      checkVisiblePlanet(); // Check if any planet is close to the camera

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
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
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
        position: 'relative',
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
        Use W/A/S/D to move through space
      </div>

      {/* Description box on the left */}
      {currentPlanet && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <h2>{currentPlanet}</h2>
          <p>
            {
              planetsData.find((planet) => planet.name === currentPlanet)
                ?.description
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default PlanetTravel;
