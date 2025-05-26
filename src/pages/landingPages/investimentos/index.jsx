// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Usaremos o mesmo nome de arquivo CSS por simplicidade
import HeaderPage from "src/components/Header/HeaderPage.jsx";

const PaginaInvestimentos = () => {
  const whyInvest = [
    {
      id: 1,
      icon: "🌱",
      title: "Faça Seu Dinheiro Render",
      description: "Em vez de deixar o dinheiro parado, os investimentos podem fazê-lo crescer ao longo do tempo, superando a inflação."
    },
    {
      id: 2,
      icon: "🎯",
      title: "Alcance Seus Grandes Objetivos",
      description: "Comprar uma casa, fazer uma viagem especial, garantir uma aposentadoria tranquila. Investir é o caminho para realizar seus sonhos."
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Construa Sua Segurança Financeira",
      description: "Ter uma reserva de investimentos traz tranquilidade e te prepara para imprevistos, garantindo um futuro mais estável."
    }
  ];

  const howPoPayHelps = [
    {
      id: 1,
      icon: "📚",
      title: "Educação Descomplicada",
      description: "Aprenda sobre o mundo dos investimentos de forma clara e objetiva. Oferecemos guias e dicas para você começar com confiança, mesmo que seja iniciante."
    },
    {
      id: 2,
      icon: "🧭",
      title: "Defina Metas e Encontre Seu Perfil",
      description: "Com o PoPay, você pode traçar seus objetivos financeiros. Ajudamos a identificar seu perfil de investidor para escolher as melhores opções para você."
    },
    {
      id: 3,
      icon: "📈",
      title: "Opções Acessíveis para Começar",
      description: "Descubra investimentos iniciais que cabem no seu bolso. Mostramos que não é preciso ser rico para começar a investir e construir seu patrimônio."
    },
    {
      id: 4,
      icon: "🔗",
      title: "Integração com Seu Planejamento",
      description: "Acompanhe seus investimentos junto com seu orçamento e planejamento financeiro, tudo em um só lugar, de forma integrada e inteligente."
    }
  ];

  return (
    <>
    <HeaderPage />
    <div className="investments-page-container">
      <header className="investments-header">
        <h1>Invista no Seu Futuro com o <span className="brand-name">PoPay</span></h1>
        <p>Depois de organizar suas finanças, o próximo passo é fazer seu dinheiro trabalhar para você. Descubra como o PoPay te ajuda a investir com inteligência e segurança.</p>
      </header>

      <section className="section why-invest-section">
        <h2 className="section-title">Por Que Começar a Investir?</h2>
        <div className="card-grid">
          {whyInvest.map(item => (
            <div key={item.id} className="info-card">
              <div className="info-icon">{item.icon}</div>
              <h3 className="info-title">{item.title}</h3>
              <p className="info-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section popay-helps-section">
        <h2 className="section-title">Como o <span className="brand-name">PoPay</span> Facilita Seus Investimentos</h2>
        <div className="card-grid">
          {howPoPayHelps.map(item => (
            <div key={item.id} className="info-card">
              <div className="info-icon">{item.icon}</div>
              <h3 className="info-title">{item.title}</h3>
              <p className="info-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section getting-started-section">
        <h2 className="section-title">Pronto para Dar o Próximo Passo?</h2>
        <p className="getting-started-text">
          Investir pode parecer complicado, mas com a orientação certa e as ferramentas do <span className="brand-name">PoPay</span>, você estará no caminho certo para construir um futuro financeiro mais próspero e seguro. Explore nossos recursos e comece sua jornada de investidor hoje mesmo!
        </p>
        <button className="cta-button-invest">Explorar Recursos de Investimento</button>
      </section>

      <footer className="investments-footer">
        <p>&copy; {new Date().getFullYear()} <span className="brand-name">PoPay</span>. Seu parceiro para uma vida financeira mais inteligente.</p>
      </footer>
    </div>
    </>
  );
};

export default PaginaInvestimentos;