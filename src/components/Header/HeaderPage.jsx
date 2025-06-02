import React, { useState, useEffect } from 'react'; // Adicione useState e useEffect
import { useNavigate, useLocation } from "react-router-dom"; // Adicione useLocation
import './style.css';

function HeaderPage() {
  const navigate = useNavigate();
  const location = useLocation(); // Para detectar mudanças de rota
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu (útil ao clicar em um link)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Efeito para fechar o menu quando a rota muda
  useEffect(() => {
    closeMenu();
  }, [location]); // Executa quando 'location' (rota) muda

  const irParaLogin = () => {
    navigate('/login');
    // closeMenu(); // Já coberto pelo useEffect
  };

  const irParaSobre = () => {
    navigate('/sobre');
    // closeMenu();
  };

  const irParaLanding = () => {
    navigate('/');
    // closeMenu();
  };

  const irParaInvestimentos = () => {
    navigate('/investimentos');
    // closeMenu();
  };

  const irParaEducacaoFinanceira = () => {
    navigate('/educacao');
    // closeMenu();
  };

  // Determina qual link está ativo para estilização
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="navbar">
        <h1 style={{ cursor: 'pointer' }} onClick={irParaLanding}>PoPay</h1>

        {/* Botão Hambúrguer (menu-toggle) */}
        <div
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          id="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links de Navegação */}
        {/* No CSS anterior, sugeri .navbar-links. Vamos usar .menu-options
            e garantir que o CSS para telas pequenas o alveje corretamente.
            A classe 'active' aqui controlará a visibilidade em telas pequenas.
        */}
        <div className={`menu-options ${isMenuOpen ? 'active' : ''}`}>
          <span
            onClick={irParaSobre}
            className={isActive('/sobre') ? 'menu-active-link' : ''} // Adapte o nome da classe se necessário no CSS
          >
            Como funciona
          </span>
          <span
            onClick={irParaInvestimentos}
            className={isActive('/investimentos') ? 'menu-active-link' : ''}
          >
            Investimentos
          </span>
          <span
            onClick={irParaEducacaoFinanceira}
            className={isActive('/educacao') ? 'menu-active-link' : ''}
          >
            Educação financeira
          </span>
          <span
            onClick={irParaLogin}
            className={isActive('/login') ? 'menu-active-link' : ''}
          >
            Entrar
          </span>
        </div>
      </header>

      <div className="divider"></div>
    </>
  );
}

export default HeaderPage;