const questions = [
    {
        question: "What is an exoplanet?",
        options: ["A planet that orbits our Sun", "A planet outside our solar system", "A moon of Earth", "A star that shines brightly"],
        answer: 1
    },
    {
        question: "How many exoplanets have scientists discovered?",
        options: ["About 10", "Over 5,000", "100", "1,000"],
        answer: 1
    },
    {
        question: "What tool do scientists use to find exoplanets?",
        options: ["A microscope", "A telescope", "A magnifying glass", "A camera"],
        answer: 1
    },
    {
        question: "Which of these planets is known for being similar to Earth?",
        options: ["Jupiter", "Gliese 581g", "Mars", "Neptune"],
        answer: 1
    },
    {
        question: "What is a 'habitable zone'?",
        options: ["A zone where space junk collects", "A region around a star where conditions might be right for life", "A zone only for robots", "A special area for astronauts to visit"],
        answer: 1
    },
    {
        question: "What do scientists look for on exoplanets to find signs of life?",
        options: ["Colors of plants", "Clouds of dust", "Water and atmosphere", "Mountains"],
        answer: 2
    },
    {
        question: "Which exoplanet is famous for having extreme temperatures?",
        options: ["Proxima Centauri b", "HD 189733b", "Kepler-22b", "Venus"],
        answer: 1
    },
    {
        question: "Why are exoplanets important to study?",
        options: ["To find new places to live", "To understand the universe better", "To learn about other potential life forms", "All of the above"],
        answer: 3
    }
];

let score = 0;
let currentQuestionIndex = 0;

function displayQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = ''; // Clear previous question
    const q = questions[currentQuestionIndex];

    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${currentQuestionIndex + 1}. ${q.question}</p>`;
    
    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options');

    q.options.forEach((option, i) => {
        const label = document.createElement('label');
        label.innerHTML = `
            <input type="radio" name="question" value="${i}">
            ${option}
        `;
        optionsContainer.appendChild(label);
    });

    questionElement.appendChild(optionsContainer);
    quizContainer.appendChild(questionElement);
}

function calculateResult() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === questions[currentQuestionIndex].answer) {
        score++;
        return true;
    }
    return false;
}

document.getElementById('nextButton').addEventListener('click', () => {
    const isCorrect = calculateResult();
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove('hidden');
    resultContainer.innerHTML = isCorrect ? "Correct!" : "Wrong! The correct answer was: " + questions[currentQuestionIndex].options[questions[currentQuestionIndex].answer];

    // Update the scoreboard
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = `Score: ${score}`;
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        document.getElementById('nextButton').innerText = "Next Question";
    } else {
        document.getElementById('nextButton').innerText = "Finish Quiz";
        document.getElementById('nextButton').removeEventListener('click', showFinalScore);
        document.getElementById('nextButton').addEventListener('click', askForName);
    }
    
    displayQuestion();
});

function askForName() {
    const name = prompt("Please enter your name:");
    showFinalScore(name);
}

function showFinalScore(name) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = `Quiz Finished! ${name}, your final score is ${score} out of ${questions.length}!`;
    document.getElementById('nextButton').classList.add('hidden');
}

displayQuestion();
document.getElementById('nextButton').classList.remove('hidden');