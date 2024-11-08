// src/pages/ResultPage.js

import React, { useEffect } from 'react';
import ScoreCard from '../components/ScoreCard';

function ResultPage({ score, restartQuiz }) {
  // Fungsi untuk membacakan skor
  const speakScore = (score) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(`jawaban yang benar adalah ${score}`);
    utterance.lang = 'id-ID'; // Atur bahasa sesuai kebutuhan
    synth.speak(utterance);
  };

  useEffect(() => {
    // Membacakan skor saat halaman hasil muncul
    speakScore(score);
  }, [score]);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-purple-50 px-4 sm:px-6 lg:px-8">
      <ScoreCard score={score} restartQuiz={restartQuiz} />
    </div>
  );
}

export default ResultPage;
