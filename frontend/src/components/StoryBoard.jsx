import React from 'react';

const StoryBoard = () => {
  return (
    <div id='story-board' className="relative bg-cover bg-center h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative z-10 flex flex-col justify-center items-center text-white w-full space-y-4">

        <div className="flex flex-row justify-center space-x-16 text-4xl md:text-5xl font-bold">
          <div>HOW</div>
          <div>WHEN</div>
          <div>WHERE</div>
        </div>

        <div className="text-5xl md:text-6xl font-extrabold pt-12">STORY TIME</div>

        <div className="pt-8">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full flex items-center hover:bg-gray-200 transition duration-300">
            Explore <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryBoard;
