// src/pages/PlanetCreation/PlanetLayerApp.js
import React, { useState } from 'react';
import Planet from './Planet';
import PlanetLayerBuilder from './PlanetLayerBuilder';

const PlanetLayerApp = () => {
  const [planetProps, setPlanetProps] = useState({
    coreSize: 1,
    mantleThickness: 1,
    crustThickness: 0.5,
    crustColor: '#cccccc',
    atmosphereColor: '#00ccff',
    ringThickness: 0,
    ringColor: '#ffffff',
    texture: null, // For texture image
  });

  const handleLayerUpdate = (newProps) => {
    setPlanetProps((prevProps) => ({ ...prevProps, ...newProps }));
  };

  return (
    <div className="flex p-4">
      <div className="w-1/3 mr-4"> {/* Changed to w-1/3 and added margin */}
        <PlanetLayerBuilder onLayerUpdate={handleLayerUpdate} />
      </div>
      <div className="flex-1 flex items-center justify-center"> {/* Planet on the right */}
        <Planet {...planetProps} />
      </div>
    </div>
  );
};

export default PlanetLayerApp;
