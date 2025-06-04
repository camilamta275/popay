import React from 'react';
import './style.css';
import Navbar from "src/components/Navbar/navbar.jsx";

const OpenFinancePage = () => {
  return (
    <>
    <Navbar />
    <div className="open-finance-container">
      <header className="of-header">
        <h1>Conheça o Open Finance</h1>
        <p>Mais controle e liberdade para sua vida financeira.</p>
      </header>

      <main className="of-main-content">
        <section className="of-section">
          <h2>O que é Open Finance?</h2>
          <p>
            Open Finance, ou Sistema Financeiro Aberto, é uma iniciativa que permite que você
            compartilhe seus dados financeiros entre diferentes instituições de forma segura e
            padronizada. Isso significa mais poder de escolha e acesso a produtos e serviços
            financeiros mais personalizados e vantajosos para você.
          </p>
        </section>

        <section className="of-section benefits-section">
          <h2>Benefícios para Você</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#8BC34A' }}> {/* Light Green */}
                {/* Ícone SVG ou caractere representando "Controle" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3>Mais Controle</h3>
              <p>Decida quais dados compartilhar, com quem e por quanto tempo.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#64DD17' }}> {/* Bright Green */}
                 {/* Ícone SVG ou caractere representando "Ofertas" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3>Melhores Ofertas</h3>
              <p>Acesse produtos e serviços financeiros com taxas e condições mais competitivas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon" style={{ backgroundColor: '#2E7D32' }}> {/* Dark Green */}
                {/* Ícone SVG ou caractere representando "Conveniência" */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F8F9FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              </div>
              <h3>Mais Conveniência</h3>
              <p>Gerencie suas finanças de forma integrada em um só lugar.</p>
            </div>
          </div>
        </section>

        <section className="of-section">
          <h2>Como Funciona?</h2>
          <p>
            De forma simples e segura:
          </p>
          <ol className="how-it-works-list">
            <li><strong>Consentimento:</strong> Você escolhe quais dados deseja compartilhar e autoriza a instituição.</li>
            <li><strong>Compartilhamento Seguro:</strong> Seus dados são transmitidos através de uma plataforma segura e padronizada pelo Banco Central.</li>
            <li><strong>Novas Experiências:</strong> Com seus dados, as instituições podem te oferecer soluções financeiras inovadoras e personalizadas.</li>
          </ol>
          <p>
            Lembre-se: você está sempre no controle e pode cancelar o compartilhamento a qualquer momento.
          </p>
        </section>

        <section className="of-section cta-section">
          <h2>FERRAMENTA EM ANDAMENTO</h2>
          <p>Essa ferramenta está em andamento! Estamos trabalhando o mais rápido para trazer o melhor para você!</p>
        </section>
      </main>
      
    </div>
    </>
  );
};

export default OpenFinancePage;