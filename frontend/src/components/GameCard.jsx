import React from 'react';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';

const GameCard = ({ title = "Memory Cards", description = "description", imageType = "g1" }) => {
  return (
    <div>
      <div className="flex flex-col rounded-2xl w-72 bg-[#ffffff] shadow-xl">
        <figure className="flex justify-center items-center rounded-2xl">
          <img src={imageType === "g1" ? g1 : g2} alt="Card Preview" className="rounded-t-2xl" />
        </figure>
        <div className="flex flex-col p-6">
          <div className="text-2xl font-bold text-[#273855] pb-6">{title}</div>
          <div className="text-lg text-[#374151]">{description}</div>
          <div className="flex justify-end pt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
