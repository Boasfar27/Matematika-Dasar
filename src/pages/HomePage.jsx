// src/pages/HomePage.js

import React from 'react';

function HomePage({ startQuiz }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-blue-600 text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-center">
        Math Quiz Challenge
      </h1>
      <button
        onClick={startQuiz}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-yellow-500 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-lg hover:bg-yellow-600 transition"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default HomePage;
