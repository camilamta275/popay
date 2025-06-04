import React from 'react';
import './style.css';
import Navbar from 'src/components/Navbar/navbar.jsx';
import { useNavigate } from 'react-router-dom';

export default function GastosFuturos() {
    const navigate = useNavigate();

  const irParaDashboard = () => {
    navigate('/dashboard');
  };
  return (
    <>
    <Navbar />
    <div className="container">
      <header>
        <h1>Previsão de Gastos do Próximo Mês</h1>
        <p>Veja como seus hábitos financeiros influenciam seu futuro e antecipe-se aos gastos.</p>
      </header>

      <section className="grafico">
        <h2>Histórico e Previsão</h2>
        <div className="grafico-placeholder">[Gráfico de barras: gastos reais x previsão]</div>
        <p className="legenda">
          <span className="real"></span> Gastos Reais
          <span className="previsto"></span> Previsão IA
        </p>
      </section>

      <section className="evolucao">
        <h2>Acompanhamento em Tempo Real</h2>
        <p>Compare os gastos reais com a previsão acumulada.</p>
        <div className="grafico-placeholder">[Gráfico de linha: acumulado]</div>
      </section>

      <section className="recomendacoes">
        <h2>Recomendações Inteligentes</h2>
        <div className="cards">
          <div className="card">
            <p>💡 Você costuma gastar mais com alimentação no fim do mês. Que tal programar suas compras?</p>
          </div>
          <div className="card">
            <p>💳 Atenção: seus gastos com lazer já atingiram 60% da previsão mensal.</p>
          </div>
          <div className="card">
            <p>📉 Você está abaixo da previsão em transporte. Continue assim!</p>
          </div>
        </div>
      </section>

      <section className="categorias">
        <h2>Para Onde Vai o Seu Dinheiro?</h2>
        <div className="grafico-placeholder">[Gráfico de pizza]</div>
        <ul>
          <li>🟩 Alimentação – R$ 450,00</li>
          <li>🟨 Lazer – R$ 300,00</li>
          <li>🟥 Cartão de Crédito – R$ 550,00</li>
        </ul>
      </section>

      <div className="botoes">
        <button>Ajustar Orçamento</button>
        <button>Criar Meta com base nesta previsão</button>
        <button onClick={irParaDashboard}>Voltar ao Dashboard</button>
      </div>
    </div>
    </>
  );
}
