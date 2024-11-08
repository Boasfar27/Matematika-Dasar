// src/pages/QuizPage.js

import React, { useState, useEffect } from 'react';
import { questions } from '../services/quizData';
import QuestionCard from '../components/QuestionCard';

function QuizPage({ endQuiz }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Fungsi untuk membacakan soal dengan kata-kata yang jelas
  const speakQuestion = (text) => {
    // Mengganti simbol operasi matematika dengan kata-kata dan menambahkan "sama dengan"
    let readableText = text
      .replace('+', 'ditambah')
      .replace('-', 'dikurangi')
      .replace('*', 'dikali')
      .replace('/', 'dibagi');

    // Menambahkan "sama dengan" di akhir soal
    readableText += ' sama dengan';

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(readableText);
    utterance.lang = 'id-ID'; // Bahasa Indonesia
    synth.speak(utterance);
  };

  useEffect(() => {
    // Membacakan pertanyaan saat soal muncul
    speakQuestion(questions[questionIndex].question);
  }, [questionIndex]);

  const handleAnswer = (option) => {
    // Periksa jawaban, dan perbarui skor jika benar
    const isCorrect = option === questions[questionIndex].answer;
    if (isCorrect) {
      // Gunakan callback `setScore` untuk memastikan state diperbarui dengan benar
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = questionIndex + 1;

    // Cek apakah pertanyaan berikutnya ada
    if (nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
    } else {
      // Panggil endQuiz setelah pembaruan skor selesai
      setTimeout(() => endQuiz(isCorrect ? score + 1 : score), 0);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-green-50">
      <QuestionCard
        question={questions[questionIndex].question}
        options={questions[questionIndex].options}
        handleAnswer={handleAnswer}
      />
      <p className="mt-4 text-gray-600">
        Question {questionIndex + 1} of {questions.length}
      </p>
    </div>
  );
}

export default QuizPage;
