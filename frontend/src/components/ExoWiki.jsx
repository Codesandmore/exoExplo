import React from 'react';

const ExoWiki = ({ x = '50%', y = '25%' }) => {
  return (
    <div
      id="exo-wiki"
      className="relative h-screen flex items-center justify-center"
    >
      <button className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center hover:bg-gray-200 transition duration-300 absolute"
              style={{
                left: x, // X-coordinate
                top: y, // Y-coordinate
                transform: 'translate(-50%, -50%)', // Center the button on the coordinates
              }}>
            Learn <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default ExoWiki;
