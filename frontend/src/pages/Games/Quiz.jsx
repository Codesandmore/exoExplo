import React, { useState, useEffect } from 'react';
import background from './cardimages/background.jpg'; // Import the background image

const Quiz = () => {
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    if (quizFinished) {
      askForName(); // Call the prompt when the quiz finishes
    }
  }, [quizFinished]);

  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value));
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null); // Clear selection for the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleQuizRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setQuizFinished(false);
    setSelectedOption(null);
    setName(''); // Reset name on quiz restart
  };

  const askForName = () => {
    const userName = prompt('Please enter your name:');
    setName(userName);
  };

  return (
    <div className="quiz-container" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', color: '#fff', padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '30px' }}>Fun Quiz!</h1>
      {!quizFinished ? (
        <div>
          <div id="scoreboard" style={{ fontSize: '30px', marginBottom: '20px', backgroundColor: '#b2dfdb', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
            Score: {score}
          </div>
          <div id="quizContainer" style={{ backgroundColor: '#fff', borderRadius: '15px', padding: '30px', maxWidth: '800px', margin: '20px auto', color: '#000', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}>
            <div className="question" style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>
              <p>{currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}</p>
            </div>
            <div className="options" style={{ textAlign: 'left' }}>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label key={index} style={{ display: 'block', fontSize: '22px', margin: '10px 0', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="question"
                    value={index}
                    checked={selectedOption === index}
                    onChange={handleOptionChange}
                    style={{ marginRight: '10px' }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
          <button 
            onClick={handleNextQuestion} 
            disabled={selectedOption === null} 
            style={{ padding: '12px 25px', fontSize: '20px', backgroundColor: '#00796b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '20px' }}>
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '24px' }}>{name}, your final score is {score} out of {questions.length}!</p>
          <button onClick={handleQuizRestart} style={{ padding: '12px 25px', fontSize: '20px', backgroundColor: '#00796b', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
