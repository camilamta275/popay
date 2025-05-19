import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardFinanceiro from './pages/dashboardFinanceiro';
import CadastroDespesas from './pages/cadastroDespesas';
import Navbar from './components/Navbar/navbar.jsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<DashboardFinanceiro />} />
        <Route path="/cadastro" element={<CadastroDespesas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
