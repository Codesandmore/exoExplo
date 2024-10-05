import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Planet = ({
  coreSize,
  crustColor,
  coreColor,
  vegetationCoverage,
  waterPresence,
  ringThickness,
  ringColor,
  texture,
  backgroundImage,
}) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); // Added preserveDrawingBuffer for download
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const crustTexture = texture ? textureLoader.load(texture) : textureLoader.load('https://i.imgur.com/d6G5zXn.jpg');
    const coreTexture = textureLoader.load('https://i.imgur.com/jR1X8pt.jpg');

    const coreGeometry = new THREE.SphereGeometry(coreSize * 0.2, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({ map: coreTexture, color: coreColor });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const crustGeometry = new THREE.SphereGeometry(coreSize * 0.2 + 0.1, 32, 32);
    const crustMaterial = new THREE.MeshBasicMaterial({ map: crustTexture, color: crustColor });
    const crust = new THREE.Mesh(crustGeometry, crustMaterial);
    scene.add(crust);

    const vegetationGeometry = new THREE.SphereGeometry(coreSize * 0.2 + 0.11, 32, 32);
    const vegetationMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: vegetationCoverage * 0.5,
    });
    const vegetation = new THREE.Mesh(vegetationGeometry, vegetationMaterial);
    scene.add(vegetation);

    const waterGeometry = new THREE.SphereGeometry(coreSize * 0.2 + 0.12, 32, 32);
    const waterMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      transparent: true,
      opacity: waterPresence * 0.5,
    });
    const water = new THREE.Mesh(waterGeometry, waterMaterial);
    scene.add(water);

    if (ringThickness > 0) {
      const ringGeometry = new THREE.RingGeometry(coreSize * 0.3, coreSize * 0.3 + ringThickness, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({ color: ringColor, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);
    }

    if (backgroundImage) {
      const backgroundTexture = textureLoader.load(backgroundImage);
      scene.background = backgroundTexture;
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      core.rotation.y += 0.1;
      crust.rotation.y += 0.05;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [coreSize, crustColor, coreColor, vegetationCoverage, waterPresence, ringThickness, ringColor, texture, backgroundImage]);

  return <div ref={mountRef}></div>;
};

export default Planet;
