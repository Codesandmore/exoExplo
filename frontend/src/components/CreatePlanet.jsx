import React from 'react';
import kidimage from '../assets/kidpaint.jpg'; // Ensure you have the correct path to your image

const CreatePlanet = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" id="create-planet">
      {/* Container for Image and Text */}
      <div className="flex items-center justify-between h-screen p-10">
        
        {/* Image Section */}
        <div className="flex items-center justify-center mb-8">
          <img src={kidimage} alt="Child painting the planet" className="w-full max-w-[400px] h-auto" />
        </div>

        {/* Text and Description Section */}
        <div className="text-right max-w-md ml-8">
          <p className="text-lg text-purple-800 font-semibold">
            Dive into the creation of exoplanets where you hold the key to its diversity. 
            From the distance to the nearest star to the mass of the planet, 
            select the features you desire and paint it out !!
          </p>

          {/* Create Button */}
          <div className="mt-6">
            <button className="px-6 py-3 bg-gray-300 text-black rounded-full text-lg hover:bg-gray-400 flex items-center shadow-md" aria-label="Create Planet">
              Create 
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-10 w-full text-center">
        <h1 className="text-4xl font-bold text-indigo-800">HOLD THE BRUSH</h1>
      </div>
    </div>
  );
}

export default CreatePlanet;
