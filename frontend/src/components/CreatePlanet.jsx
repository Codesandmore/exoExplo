import React from 'react';
import { Link } from 'react-router-dom';
import kidpaint from '../assets/kidpaint.jpg';

const CreatePlanet = () => {
  return (
    <div id='create-planet' className="relative flex flex-col justify-center items-start bg-cover bg-center min-h-screen px-8">
      <div className="flex flex-wrap md:flex-nowrap items-center w-full mb-6">
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={kidpaint}
            alt="Planet"
            className="w-3/4 h-auto object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full flex flex-col justify-between md:ml-8 mt-6 md:mt-0 h-full">
          <div className="flex-1 max-w-md">
            <p className="text-2xl md:text-5xl mb-4 leading-snug">
              Dive into the creation of exoplanets where you hold the key to its diversity. 
              From the distance to the nearest star to the mass of the planet, select the features you desire and paint it out !!
            </p>
          </div>

          <Link
            to="/create"
            className="text-white bg-blue-500 hover:bg-blue-600 px-16 py-8 rounded-lg text-xl flex items-center justify-between w-48"
          >
            Create <span className="ml-2">→</span>
          </Link>
        </div>
      </div>

      <p className="text-left text-6xl font-bold md:ml-[6%]">
        HOLD THE BRUSH
      </p>
    </div>
  );
};

export default CreatePlanet;
