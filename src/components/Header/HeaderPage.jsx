import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function HeaderPage() {
  const navigate = useNavigate();

    const irParaLogin = () => {
    navigate('/login');
  };

      const irParaSobre = () => {
    navigate('/sobre');
  };

  const irParaLanding = () => {
    navigate('/');
  };

    const irParaInvestimentos = () => {
    navigate('/investimentos');
  };

    const irParaEducacaoFinanceira = () => {
    navigate('/educacao');
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="navbar">
        <h1 style={{ cursor: 'pointer' }} onClick={irParaLanding}>PoPay</h1>
        <div className="menu-options">
          <span onClick={irParaSobre}>Como funciona</span>
          <span onClick={irParaInvestimentos}>Investimentos</span>
          <span onClick={irParaEducacaoFinanceira}>Educação financeira</span>
          <span onClick={irParaLogin}>Entrar</span>
        </div>
      </header>

      <div className="divider"></div>
    </>
  );
}

export default HeaderPage;
