import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function HeaderPage() {
  const navigate = useNavigate();

    const irParaLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Cabeçalho */}
      <header className="navbar">
        <h1 style={{ cursor: 'pointer' }}>PoPay</h1>
        <div className="menu-options">
          <span>Como funciona</span>
          <span>Investimentos</span>
          <span>Educação financeira</span>
          <span>Blog</span>
          <span onClick={irParaLogin}>Entrar</span>
        </div>
      </header>

      <div className="divider"></div>
    </>
  );
}

export default HeaderPage;
