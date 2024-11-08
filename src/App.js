// src/App.js

import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  const [page, setPage] = useState('home');
  const [score, setScore] = useState(0);

  const startQuiz = () => setPage('quiz');
  const endQuiz = (finalScore) => {
    setScore(finalScore);
    setPage('result');
  };
  const restartQuiz = () => {
    setScore(0);
    setPage('home');
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center">
      {page === 'home' && <HomePage startQuiz={startQuiz} />}
      {page === 'quiz' && <QuizPage endQuiz={endQuiz} />}
      {page === 'result' && <ResultPage score={score} restartQuiz={restartQuiz} />}
    </div>
  );
}

export default App;
