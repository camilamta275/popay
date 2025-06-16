// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'; // Reutilizando o mesmo nome de arquivo CSS
import HeaderPage from "src/components/Header/HeaderPage.jsx";
import { useNavigate } from 'react-router-dom';

const EducacaoFinanceiraPage = () => {
  
  const navigate = useNavigate();

  const irParaHomePage = () => {
    navigate('/dashboard');
  };
  
  const learningPillars = [
    {
      id: 1,
      icon: "💰",
      title: "Orçamento que Funciona",
      description: "Aprenda a criar e gerenciar um orçamento realista que te dá clareza sobre suas receitas e despesas, permitindo que você assuma o controle do seu dinheiro."
    },
    {
      id: 2,
      icon: "🚫",
      title: "Liberdade das Dívidas",
      description: "Entenda os tipos de dívidas, crie estratégias eficazes para quitá-las e, o mais importante, aprenda a evitar novas armadilhas financeiras."
    },
    {
      id: 3,
      icon: "🛍️",
      title: "Consumo Consciente e Inteligente",
      description: "Desenvolva hábitos de consumo que alinham seus gastos com seus valores e objetivos, diferenciando necessidades de desejos e comprando com mais propósito."
    },
    {
      id: 4,
      icon: "🏁",
      title: "Planejamento para Suas Metas",
      description: "Defina seus objetivos financeiros de curto, médio e longo prazo. Descubra como criar um plano de ação para alcançar cada um deles."
    },
    {
      id: 5,
      icon: "📈",
      title: "Primeiros Passos para Investir",
      description: "Desmistifique o mundo dos investimentos. Entenda os conceitos básicos, a importância de uma reserva de emergência e como se preparar para fazer seu dinheiro render."
    },
    {
      id: 6,
      icon: "💡",
      title: "Decisões Financeiras Assertivas",
      description: "Ganhe confiança para tomar decisões financeiras mais informadas no seu dia a dia, desde pequenas compras até grandes projetos de vida."
    }
  ];

  const popayTeachingApproach = [
    {
      id: 1,
      icon: "🧩",
      title: "Conteúdo Interativo e Prático",
      description: "Acesse artigos, guias, simuladores e dicas rápidas apresentados de forma leve e fácil de entender, focados na aplicação prática."
    },
    {
      id: 2,
      icon: "🤖",
      title: "Insights Personalizados com IA",
      description: "Nossa Inteligência Artificial analisa seus dados (com sua permissão) para oferecer dicas e orientações financeiras que realmente se encaixam na sua realidade."
    },
    {
      id: 3,
      icon: "🛠️",
      title: "Ferramentas Integradas",
      description: "Utilize nossas ferramentas de orçamento, planejamento de metas e análise de gastos para colocar em prática tudo o que você aprende, diretamente no app."
    }
  ];

  return (
    <>
    <HeaderPage />
    <div className="education-page-container">
      <header className="education-header">
        <h1>Sua Jornada para o Domínio Financeiro Começa Aqui com <span className="brand-name">PoPay</span></h1>
        <p>Acreditamos que a educação financeira é a chave para uma vida mais tranquila e cheia de realizações. Com o PoPay, aprender a lidar com seu dinheiro é simples, prático e transformador.</p>
      </header>

      <section className="section pillars-section">
        <h2 className="section-title">Pilares da Sua Educação Financeira no <span className="brand-name">PoPay</span></h2>
        <div className="card-grid-education">
          {learningPillars.map(item => (
            <div key={item.id} className="education-card">
              <div className="education-icon">{item.icon}</div>
              <h3 className="education-title">{item.title}</h3>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section approach-section">
        <h2 className="section-title">Como o <span className="brand-name">PoPay</span> Transforma o Aprendizado</h2>
         <div className="card-grid-education approach-cards">
          {popayTeachingApproach.map(item => (
            <div key={item.id} className="education-card compact-card">
              <div className="education-icon small-icon">{item.icon}</div>
              <h3 className="education-title">{item.title}</h3>
              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta-education-section">
        <h2 className="section-title">Pronto para Descomplicar Suas Finanças?</h2>
        <p className="cta-text">
          Dê o primeiro passo rumo a uma relação mais saudável e inteligente com seu dinheiro. Explore nossos módulos e ferramentas de educação financeira.
        </p>
        <button className="cta-button-education" onClick={irParaHomePage}>Começar a Aprender Agora</button>
      </section>
    </div>
    </>
  );
};

export default EducacaoFinanceiraPage;