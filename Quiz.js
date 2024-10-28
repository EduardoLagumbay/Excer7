// src/Quiz.js

import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Jane Austen", "Mark Twain", "F. Scott Fitzgerald"],
    answer: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean",
  },
];

const Quiz = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  
  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionChange = (option) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = option;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = selectedAnswers.filter((answer, index) => answer === questions[index].answer).length;
      onComplete(score);
    }
  };

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="quiz"
            value={option}
            checked={selectedAnswers[currentQuestionIndex] === option}
            onChange={() => handleOptionChange(option)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleNext}>
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default Quiz;
