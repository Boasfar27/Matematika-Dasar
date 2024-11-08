// src/components/ScoreCard.js

import React from 'react';

function ScoreCard({ score, restartQuiz }) {
  return (
    <div className="flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-lg text-center w-full max-w-sm sm:max-w-md lg:max-w-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-4">
        Jawaban yang benar adalah {score}
      </h1>
      <button
        onClick={restartQuiz}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-red-500 text-white text-base sm:text-lg md:text-xl rounded-lg hover:bg-red-600 transition"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default ScoreCard;
