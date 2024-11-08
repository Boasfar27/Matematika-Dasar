// src/components/QuestionCard.js

import React from 'react';

function QuestionCard({ question, options, handleAnswer }) {
  return (
    <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg w-full max-w-md text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">{question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
