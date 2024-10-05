import React, { useState } from 'react';

const PlanetLayerBuilder = ({ onLayerUpdate }) => {
  const [coreSize, setCoreSize] = useState(1);
  const [crustColor, setCrustColor] = useState('#cccccc');
  const [coreColor, setCoreColor] = useState('#ff5733');
  const [vegetationCoverage, setVegetationCoverage] = useState(0);
  const [waterPresence, setWaterPresence] = useState(0);
  const [ringThickness, setRingThickness] = useState(0);
  const [ringColor, setRingColor] = useState('#ffffff');
  const [texture, setTexture] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleUpdate = () => {
    onLayerUpdate({
      coreSize,
      crustColor,
      coreColor,
      vegetationCoverage,
      waterPresence,
      ringThickness,
      ringColor,
      texture,
      backgroundImage,
    });
  };

  const handleTextureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTexture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackgroundImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.toBlob((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'planet.png';
        link.click();
      });
    }
  };

  const handleShare = () => {
    const shareUrl = window.location.href;
    alert(`Share this URL: ${shareUrl}`);
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-5 space-y-4">
      <h2 className="text-xl font-bold">Build Your Planet</h2>

      {/* Core Size */}
      <div className="w-full">
        <label className="block">Core Size:</label>
        <input
          type="range"
          min="1"
          max="10"
          step="0.1"
          value={coreSize}
          onChange={(e) => setCoreSize(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Crust Color */}
      <div className="w-full">
        <label className="block">Crust Color:</label>
        <input
          type="color"
          value={crustColor}
          onChange={(e) => setCrustColor(e.target.value)}
          className="p-0 w-full"
        />
      </div>

      {/* Core Color */}
      <div className="w-full">
        <label className="block">Core Color:</label>
        <input
          type="color"
          value={coreColor}
          onChange={(e) => setCoreColor(e.target.value)}
          className="p-0 w-full"
        />
      </div>

      {/* Vegetation Coverage */}
      <div className="w-full">
        <label className="block">Vegetation Coverage (0 - 1):</label>
        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          value={vegetationCoverage}
          onChange={(e) => setVegetationCoverage(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Water Presence */}
      <div className="w-full">
        <label className="block">Water Presence (0 - 1):</label>
        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          value={waterPresence}
          onChange={(e) => setWaterPresence(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Ring Thickness */}
      <div className="w-full">
        <label className="block">Ring Thickness:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={ringThickness}
          onChange={(e) => setRingThickness(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Ring Color */}
      <div className="w-full">
        <label className="block">Ring Color:</label>
        <input
          type="color"
          value={ringColor}
          onChange={(e) => setRingColor(e.target.value)}
          className="p-0 w-full"
        />
      </div>

      {/* Texture Upload */}
      <div className="w-full">
        <label className="block">Upload Texture:</label>
        <input type="file" accept="image/*" onChange={handleTextureChange} />
      </div>

      {/* Background Image Upload */}
      <div className="w-full">
        <label className="block">Upload Background Image:</label>
        <input type="file" accept="image/*" onChange={handleBackgroundChange} />
      </div>

      {/* Update Button */}
      <button onClick={handleUpdate} className="bg-blue-500 text-white rounded px-4 py-2">
        Update Planet
      </button>

      {/* Download Button */}
      <button onClick={handleDownload} className="bg-green-500 text-white rounded px-4 py-2">
        Download Planet
      </button>

      {/* Share Button */}
      <button onClick={handleShare} className="bg-yellow-500 text-white rounded px-4 py-2">
        Share Planet
      </button>
    </div>
  );
};

export default PlanetLayerBuilder;
