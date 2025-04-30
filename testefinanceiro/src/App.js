// App.js
import React, { useState } from 'react';
import QuizFinanceiro from './quizFinanceiro';
import IntroQuiz from './introQuiz';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      {started ? (
        <QuizFinanceiro />
      ) : (
        <IntroQuiz onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
