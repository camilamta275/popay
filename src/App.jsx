import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardFinanceiro from './pages/dashboardFinanceiro';
import CadastroDespesas from './pages/cadastroDespesas';
import Navbar from './components/Navbar/navbar.jsx';
import QuizFinanceiro from './pages/testeFinanceiro/quiz';
import IntroQuiz from './pages/testeFinanceiro/intro';
import Configuracoes from './pages/configuracoesConta';
import LoginContas from './pages/loginConta';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardFinanceiro />} />
        <Route path="/cadastro" element={<CadastroDespesas />} />
        <Route path="/conta" element={<Configuracoes />} />
        <Route path="/introQuiz" element={<IntroQuiz />} />
        <Route path="/quiz" element={<QuizFinanceiro />} />
        <Route path="/login" element={<LoginContas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
