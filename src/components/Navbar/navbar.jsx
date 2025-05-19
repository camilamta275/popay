import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function Navbar() {
  const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate('/cadastro');
  };

  const irParaDashboard = () => {
    navigate('/');
  };

  const irParaIntroQuiz = () => {
    navigate('/introQuiz');
  };

    const irParaConfiguracoes = () => {
    navigate('/conta');
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="navbar">
        <h1 onClick={irParaDashboard} style={{ cursor: 'pointer' }}>PoPay</h1>
        <div className="menu-options">
          <span onClick={irParaDashboard}>VISÃO GERAL</span>
          <span onClick={irParaCadastro}>CADASTRO</span>
          <span onClick={irParaIntroQuiz}>QUIZ</span>
          <span onClick={irParaConfiguracoes}>CONTA</span>
        </div>
      </header>

      <div className="divider"></div>
    </>
  );
}

export default Navbar;
