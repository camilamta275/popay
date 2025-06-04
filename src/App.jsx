import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardFinanceiro from './pages/dashboardFinanceiro';
import CadastroDespesas from './pages/cadastroDespesas';
import QuizFinanceiro from './pages/testeFinanceiro/quiz';
import IntroQuiz from './pages/testeFinanceiro/intro';
import Configuracoes from './pages/configuracoesConta';
import LoginContas from './pages/loginConta';
import LandingPage from './pages/landingPages/index.jsx';
import ComoFunciona from 'src/pages/landingPages/comoFunciona/index.jsx';
import Investimentos from 'src/pages/landingPages/investimentos/index.jsx';
import Educacao from 'src/pages/landingPages/educacaoFinanceira/index.jsx';
import Chatbot from 'src/pages/chatBot/index.jsx';
import OpenFinance from 'src/pages/openFinance/index.jsx';
import GastosFuturos from 'src/pages/previsoesGastos/index.jsx';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardFinanceiro />} />
        <Route path="/cadastro" element={<CadastroDespesas />} />
        <Route path="/conta" element={<Configuracoes />} />
        <Route path="/introQuiz" element={<IntroQuiz />} />
        <Route path="/quiz" element={<QuizFinanceiro />} />
        <Route path="/login" element={<LoginContas />} />
        <Route path="/sobre" element={<ComoFunciona />} />
        <Route path="/investimentos" element={<Investimentos />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/finance" element={<OpenFinance />} />
        <Route path="/gastos" element={<GastosFuturos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
