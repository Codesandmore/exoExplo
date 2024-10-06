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

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center">Build Your Planet</h2>

      <div>
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

      <div>
        <label className="block">Crust Color:</label>
        <input
          type="color"
          value={crustColor}
          onChange={(e) => setCrustColor(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label className="block">Core Color:</label>
        <input
          type="color"
          value={coreColor}
          onChange={(e) => setCoreColor(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
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

      <div>
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

      <div>
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

      <div>
        <label className="block">Ring Color:</label>
        <input
          type="color"
          value={ringColor}
          onChange={(e) => setRingColor(e.target.value)}
          className="w-full"
        />
      </div>

      <div>
        <label className="block">Upload Texture:</label>
        <input type="file" accept="image/*" onChange={handleTextureChange} />
      </div>

      <div>
        <label className="block">Upload Background Image:</label>
        <input type="file" accept="image/*" onChange={handleBackgroundChange} />
      </div>

      <button onClick={handleUpdate} className="bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 w-full">
        Update Planet
      </button>
    </div>
  );
};

export default PlanetLayerBuilder;
