import React from 'react';
import GameCard from './GameCard';
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div id="games" className="flex justify-center items-center space-x-56">
        <Link to="/memory">
      <GameCard title="Memory Cards" imageType = "g2" description="Match alien creatures, celestial bodies, and futuristic technology to test your memory and discover the secrets of the universe." />
      </Link>
       <Link to="/quiz">
      <GameCard title="Exo Quiz" imageType = "g1" description="Compete against players from around the galaxy and answer questions about planets, stars, galaxies, and beyond to show your prowess!!!" />
        </Link>
    </div>
  );
};

export default Games;
