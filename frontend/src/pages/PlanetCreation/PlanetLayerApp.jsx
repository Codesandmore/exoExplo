import React, { useState } from 'react';
import Planet from './Planet';
import PlanetLayerBuilder from './PlanetLayerBuilder';

const PlanetLayerApp = () => {
  const [planetProps, setPlanetProps] = useState({
    coreSize: 1,
    crustColor: '#cccccc',
    coreColor: '#ff5733',
    vegetationCoverage: 0,
    waterPresence: 0,
    ringThickness: 0,
    ringColor: '#ffffff',
    texture: null,
    backgroundImage: null,
  });

  const handleLayerUpdate = (newProps) => {
    setPlanetProps((prevProps) => ({ ...prevProps, ...newProps }));
  };

  return (
    <div className="flex p-4">
      <div className="w-1/3 mr-4">
        <PlanetLayerBuilder onLayerUpdate={handleLayerUpdate} />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <Planet {...planetProps} />
      </div>
    </div>
  );
};

export default PlanetLayerApp;
