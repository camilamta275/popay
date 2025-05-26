// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import HeaderPage from "src/components/Header/HeaderPage.jsx";

const ComoFunciona = () => {
  const steps = [
    {
      id: 1,
      icon: "🔍", // Você pode substituir por SVGs ou ícones de uma biblioteca depois
      title: "1. Análise Inteligente dos Seus Hábitos",
      description: "Conecte suas contas ou registre suas despesas de forma simples e segura. Nossa Inteligência Artificial entra em ação para entender profundamente seus padrões de consumo e identificar para onde seu dinheiro está indo."
    },
    {
      id: 2,
      icon: "📊",
      title: "2. Previsões e Alertas Proativos",
      description: "Com base na análise, nosso sistema prevê seus prováveis meses de maiores gastos. Você recebe alertas e insights para se antecipar, evitando surpresas desagradáveis no orçamento."
    },
    {
      id: 3,
      icon: "💡",
      title: "3. Sugestões e Ajustes Personalizados",
      description: "Receba sugestões de ajustes e otimizações financeiras feitas sob medida para você. A IA te ajuda a identificar oportunidades de economia e a tomar decisões mais inteligentes com seu dinheiro."
    },
    {
      id: 4,
      icon: "🎯",
      title: "4. Perfis e Estratégias para o Sucesso",
      description: "Criamos seu perfil financeiro exclusivo, oferecendo um panorama claro da sua saúde financeira. Acesse estratégias eficazes para equilibrar as contas, definir metas realistas, sair das dívidas e construir um futuro mais seguro."
    },
    {
      id: 5,
      icon: "🚀",
      title: "5. Conquiste Sua Estabilidade Financeira",
      description: "Com clareza, planejamento e as ferramentas certas, você assume o controle das suas finanças, alcança seus objetivos e garante a tranquilidade de um futuro financeiro bem planejado e estável."
    }
  ];

  return (
    <>
    <HeaderPage />
    <div className="how-it-works-container">
      <header className="how-it-works-header">
        <h1>Como o <span className="brand-name">PoPay</span> Transforma Suas Finanças</h1>
        <p>Entenda o passo a passo para organizar sua vida financeira, evitar dívidas e construir um futuro mais seguro com nossa plataforma inteligente.</p>
      </header>

      <section className="steps-section">
        {steps.map(step => (
          <div key={step.id} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </section>

      <footer className="how-it-works-footer">
        <p>Pronto para começar a trilhar o caminho para uma vida financeira mais equilibrada?</p>
        <button className="cta-button">Quero Organizar Minhas Finanças!</button>
      </footer>
    </div>
    </>
  );
};


export default ComoFunciona; // Adicionado para conformidade com módulos ES se necessário