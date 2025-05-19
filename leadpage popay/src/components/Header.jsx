import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PoPay </div>
      <nav className="nav">
        <a href="#como-funciona">Como funciona</a>
        <a href="#investimentos">Investimentos</a>
        <a href="#educacao">Educação financeira</a>
        <a href="#blog">Blog</a>
      </nav>
      <div className="actions">
        <button className="download-btn">Baixar agora!</button>
        <button className="login-btn">Entrar</button>
      </div>
    </header>
  );
};

export default Header;
