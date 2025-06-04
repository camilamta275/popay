import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom"; // Adicionado useLocation
import './style.css';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Para determinar a rota ativa
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Para detectar cliques fora do menu (ícone e dropdown)
  const iconRef = useRef(null); // Para detectar cliques no ícone

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Fecha o menu se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o menu estiver aberto e o clique não for no menu nem no ícone
      if (isMobileMenuOpen &&
          menuRef.current && !menuRef.current.contains(event.target) &&
          iconRef.current && !iconRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Apenas re-executa se isMobileMenuOpen mudar

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Fecha o menu mobile após a navegação
  };

  // Função para verificar se o link está ativo
  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { label: 'VISÃO GERAL', path: '/dashboard' },
    { label: 'CHATBOT', path: '/chat' },
    { label: 'OPEN FINANCE', path: '/finance' },
    { label: 'CADASTRO', path: '/cadastro' },
    { label: 'QUIZ', path: '/introQuiz' },
    { label: 'CONTA', path: '/conta' }
  ];

  return (
    <>
      <header className="navbar">
        <h1 onClick={() => handleNavigation('/dashboard')} style={{ cursor: 'pointer' }}>PoPay</h1>

        {/* Menu para Desktop */}
        <div className="menu-options-desktop">
          {menuItems.map(item => (
            <span
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className={isActive(item.path) ? 'menu-active' : ''}
            >
              {item.label}
            </span>
          ))}
        </div>

        {/* Ícone do Menu Hambúrguer para Mobile */}
        <button
          ref={iconRef} // Referência para o ícone
          className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu-list" // Controla o menu mobile
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>

        {/* Menu para Mobile (dropdown) */}
        <div
          id="mobile-menu-list"
          ref={menuRef} // Referência para o dropdown
          className={`menu-options-mobile ${isMobileMenuOpen ? 'open' : ''}`}
          role="navigation"
          aria-labelledby={iconRef.current ? iconRef.current.id : undefined} // Associado ao botão
        >
          {menuItems.map(item => (
            <span
              key={item.label}
              onClick={() => handleNavigation(item.path)}
              className={isActive(item.path) ? 'menu-active' : ''}
              role="menuitem" // Melhora acessibilidade
            >
              {item.label}
            </span>
          ))}
        </div>
      </header>

      {/* O divider pode precisar ser estilizado ou removido dependendo
          de como o menu mobile interage com o layout abaixo dele.
          Se o menu mobile estiver sobrepondo o conteúdo, o divider
          pode não ser visualmente relevante quando o menu está aberto. */}
      <div className="divider"></div>
    </>
  );
}

export default Navbar;