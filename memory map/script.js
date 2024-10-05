const cardsArray = [
    'images/card1.png', 'images/card1.png',
    'images/card2.png', 'images/card2.png',
    'images/card3.png', 'images/card3.png',
    'images/card4.png', 'images/card4.png',
    'images/card5.png', 'images/card5.png',
    'images/card6.png', 'images/card6.png',
    'images/card7.png', 'images/card7.png',
    'images/card8.png', 'images/card8.png'
];

let cardElements = [];
let firstCard, secondCard;
let lockBoard = false;
let matchesFound = 0;
let score = 0; // Initialize score
let timer;
let timeLeft = 60; // Timer set to 60 seconds

const gameContainer = document.getElementById('gameContainer');
const restartButton = document.getElementById('restartButton');
const scoreDisplay = document.getElementById('scoreDisplay'); // Score display element
const timerDisplay = document.getElementById('timerDisplay'); // Timer display element

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    shuffle(cardsArray);
    gameContainer.innerHTML = '';

    cardsArray.forEach((value) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;

        const img = document.createElement('img');
        img.src = value;
        card.appendChild(img);

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
        cardElements.push(card);
    });

    startTimer(); // Start the timer when the board is created
}

function startTimer() {
    timerDisplay.textContent = `Time: ${timeLeft}`;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up! Game over!');
            endGame();
        }
    }, 1000);
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    lockBoard = true;

    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.classList.add('match');
    secondCard.classList.add('match');
    updateScore();
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
    matchesFound += 2;
    if (matchesFound === cardsArray.length) {
        clearInterval(timer); // Stop the timer when the game is won
        setTimeout(() => {
            if (score > 40) {
                alert('You win! Your score is ' + score);
            } else {
                alert('Game over! You scored: ' + score);
            }
        }, 500);
    }
}

function updateScore() {
    score += 10;
    scoreDisplay.textContent = `Score: ${score}`;
}

function restartGame() {
    matchesFound = 0;
    score = 0;
    timeLeft = 60; // Reset time
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}`; // Reset timer display
    clearInterval(timer); // Clear the timer
    cardElements.forEach(card => card.classList.remove('flipped', 'match'));
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    createBoard();
}

function endGame() {
    clearInterval(timer);
    if (score <= 40) {
        alert('Game over! Your final score is: ' + score);
    }
}

restartButton.addEventListener('click', restartGame);
createBoard();
