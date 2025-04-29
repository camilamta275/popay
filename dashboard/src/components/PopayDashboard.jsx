import React from "react";
import "./PopayDashboard.css";

const PopayDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Cabeçalho */}
      <header className="dashboard-header">
        <h1> PoPay </h1>
        <div className="menu-options">
          <span className="menu-active">VISÃO GERAL</span>
          <span>LANÇAMENTOS</span>
          <span>RELATÓRIOS</span>
          <span>METAS</span>
        </div>
      </header>

      <div className="divider"></div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Boa noite, Kacey Musgraves!</h3>
          <div className="value-box value-income">
            receita mensal <br /> +832,92
          </div>
        </div>

        <div className="summary-card">
          <h3>Kacey, confira o acúmulo de suas despesas!</h3>
          <div className="value-box value-expense">
            despesa mensal <br /> +832,92
          </div>
        </div>

        <div className="summary-card">
          <h3>
            saldo geral <br /> R$ 22.321,20
          </h3>
          <button className="report-button">📊 ver relatórios</button>
        </div>

        <div className="summary-card">
          <h3>Acesso rápido</h3>
          <div className="quick-access-buttons">
            <button className="quick-button register-button">❌ Despesa</button>
            <button className="quick-button income-button">💲 Receita</button>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        <section className="card">
          <h3>Muitas Contas</h3>
          <p className="card-description">
            Kacey, essas são suas próximas faturas. Se programa para não perder
            o vencimento
          </p>
          <div className="card-items">
            <div className="card-item">
              <span>20/03/2025</span>
              <span>R$ 300,00</span>
            </div>
            <div className="card-item">
              <span>20/03/2025</span>
              <span>R$ 300,00</span>
            </div>
          </div>
        </section>

        {/* Minhas Contas */}
        <section className="card">
          <h3>Minhas Contas</h3>
          <div className="card-items">
            <div className="card-item">
              <span>NuConta</span>
              <span>R$ 1.200</span>
            </div>
            <div className="card-item">
              <span>BANCO CAIXA </span>
              <span>R$ 1.200</span>
            </div>
          </div>
        </section>

        {/* Carteira */}
        <section className="card">
          <h3>Calça</h3>
          <div className="card-item wallet-item">
            <span></span>
            <span className="wallet-value">R$ 1.000,00</span>
          </div>
        </section>

        {/* Maiores Gastos */}
        <section className="card">
          <h3>Kacey, aqui está os seus maiores gastos dos últimos 30 dias</h3>
          <div className="card-items">
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 24,00</span>
            </div>
            <div className="card-item">
              <span>Streamings</span>
              <span>R$ 24,00</span>
            </div>
          </div>
        </section>

        {/* Metas de Abril */}
        <section className="card">
          <h3>Metas de Abril</h3>
          <div className="card-items">
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 24,00</span>
            </div>
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 24,00</span>
            </div>
          </div>
        </section>

        {/* Serviço */}
        <section className="card">
          <h3>Metas de Abril de forma de serviço</h3>
          <div className="card-items">
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 24,00</span>
            </div>
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 24,00</span>
            </div>
          </div>
        </section>
      </div>

      {/* Atendimento */}
      <section className="card">
        <h3>Atendimento com:</h3>
        <div className="card-items">
          <div className="card-item">
            <span>Alimentação</span>
            <span>R$ 24,00</span>
          </div>
          <div className="card-item">
            <span>Alimentação</span>
            <span>R$ 24,00</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopayDashboard;
