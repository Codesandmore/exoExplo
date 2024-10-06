import React, { useEffect } from 'react';
import card1 from './cardimages/card1.png';
import card2 from './cardimages/card2.png';
import card3 from './cardimages/card3.png';
import card4 from './cardimages/card4.png';
import card5 from './cardimages/card5.png';
import card6 from './cardimages/card6.png'; 
import card7 from './cardimages/card7.png';
import card8 from './cardimages/card8.png';
import background from './cardimages/background.jpg'; // Import the background image

const MemoryCards = () => {
  const cardsArray = [
    card1, card1,
    card2, card2,
    card3, card3,
    card4, card4,
    card5, card5,
    card6, card6,
    card7, card7,
    card8, card8
  ];

  let firstCard, secondCard;
  let lockBoard = false;
  let matchesFound = 0;
  let score = 0;
  let timer;
  let timeLeft = 60;

  useEffect(() => {
    createBoard();
  }, []);

  // Shuffle the cards
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  // Create the game board
  function createBoard() {
    shuffle(cardsArray);
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';

    cardsArray.forEach((value) => {
      const card = document.createElement('div');
      card.classList.add('card', 'bg-blue-600', 'rounded-lg', 'w-28', 'h-28', 'relative', 'cursor-pointer', 'transition-transform', 'duration-200', 'transform');
      card.dataset.value = value;

      const img = document.createElement('img');
      img.src = value;
      img.classList.add('absolute', 'w-full', 'h-full', 'object-cover', 'opacity-0', 'transition-opacity', 'duration-500');
      card.appendChild(img);

      card.addEventListener('click', flipCard);
      gameContainer.appendChild(card);
    });

    startTimer();
  }

  // Start the game timer
  function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = `Time: ${timeLeft}`;
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time: ${timeLeft}`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

  // Handle card flip logic
  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    const img = this.querySelector('img');
    img.classList.remove('opacity-0');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  // Check if the two flipped cards match
  function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
      disableCards();
    } else {
      unflipCards();
    }
  }

  // Handle matched cards
  function disableCards() {
    firstCard.classList.add('match', 'bg-green-500');
    secondCard.classList.add('match', 'bg-green-500');
    score += 10;
    matchesFound += 2;
    updateScore();

    if (matchesFound === cardsArray.length) {
      clearInterval(timer);
      setTimeout(() => {
        alert(`You win! Your score is ${score}`);
      }, 500);
    }

    resetBoard();
  }

  // Handle unmatched cards
  function unflipCards() {
    setTimeout(() => {
      const img1 = firstCard.querySelector('img');
      const img2 = secondCard.querySelector('img');
      img1.classList.add('opacity-0');
      img2.classList.add('opacity-0');
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');

      resetBoard();
    }, 1000);
  }

  // Reset the board after each flip
  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  // Update the score display
  function updateScore() {
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Restart the game
  function restartGame() {
    matchesFound = 0;
    score = 0;
    timeLeft = 60;
    const scoreDisplay = document.getElementById('scoreDisplay');
    const timerDisplay = document.getElementById('timerDisplay');
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}`;
    clearInterval(timer);
    createBoard();
  }

  // End the game when time is up
  function endGame() {
    alert(`Time is up! Game over! Your final score is: ${score}`);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="text-white text-4xl mb-5">Memory Card Game</h1>
      <div id="scoreDisplay" className="text-white text-2xl mb-5">Score: 0</div>
      <div id="timerDisplay" className="text-white text-2xl mb-5">Time: 60</div>
      <div id="gameContainer" className="grid grid-cols-4 gap-4"></div>
      <button id="restartButton" onClick={restartGame} className="mt-5 px-5 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 transition-all duration-300">Restart Game</button>
    </div>
  );
};

export default MemoryCards;
