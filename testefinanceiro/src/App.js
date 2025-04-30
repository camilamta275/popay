import React from 'react';
import QuizFinanceiro from './quizFinanceiro.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>🧠 Teste de Personalidade Financeira</h1>
      <QuizFinanceiro />
    </div>
  );
}

export default App;
