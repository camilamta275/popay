import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

function PopayDashboard() {

  const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate('/cadastro');
  };

  return (
    <div className="dashboard-container">
      {/* Cabeçalho */}
      <header className="navbar">
        <h1>PoPay</h1>
        <div className="menu-options">
          <span className="menu-active">VISÃO GERAL</span>
          <span>LANÇAMENTOS</span>
          <span>RELATÓRIOS</span>
          <span>METAS</span>
        </div>
      </header>

      <div className="divider"></div>

      {/* Cartões Resumo */}
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
          <button onClick={irParaCadastro} className="quick-button income-button"> ❌ Despesas</button>
          <button onClick={irParaCadastro} className="quick-button income-button">💲 Receita</button>
          </div>
        </div>
      </div>

      {/* Próximas Faturas */}
      <section className="card-warning">
        <h3>
          Kacey, essas são suas próximas faturas.
          <br />
          Programe-se para não perder o vencimento.
        </h3>
        <div className="card-warning-items">
          <div className="card-warning-item">
            <div>
              <strong>Fatura Nubank</strong>
              <br />
              <span className="due-date">20/03/2025</span>
            </div>
            <div className="amount">R$ 600,00</div>
          </div>
          <div className="card-warning-item">
            <div>
              <strong>Fatura Banco do Brasil</strong>
              <br />
              <span className="due-date">20/03/2025</span>
            </div>
            <div className="amount">R$ 100,00</div>
          </div>
        </div>
      </section>

      {/* Minhas Contas */}
      <section className="accounts-section">
        <h3>Minhas Contas</h3>
        <div className="accounts-list">
          <div className="account-item">
            <div>
              <strong>NuConta</strong>
              <br />
              <span>conta corrente</span>
            </div>
            <div className="account-value">R$ 1.200,03</div>
          </div>
          <div className="account-item">
            <div>
              <strong>CAIXA</strong>
              <br />
              <span>conta poupança</span>
            </div>
            <div className="account-value">R$ 1.200,03</div>
          </div>
          <div className="account-item">
            <div>
              <strong>Banco do Brasil</strong>
              <br />
              <span>conta corrente</span>
            </div>
            <div className="account-value">R$ 1.200,03</div>
          </div>
          <div className="account-item">
            <div>
              <strong>Banco Itaú</strong>
              <br />
              <span>conta poupança</span>
            </div>
            <div className="account-value">R$ 1.200,03</div>
          </div>
        </div>
      </section>

      {/* Maiores Gastos + Metas de Abril lado a lado */}
      <section className="card-row">
        {/* Maiores Gastos */}
        <div className="card card-gastos">
          <h3>Kacey, aqui estão seus maiores gastos dos últimos 30 dias</h3>
          <div className="card-items">
            <div className="card-item">
              <span>Alimentação</span>
              <span>R$ 1.200,03</span>
            </div>
            <div className="card-item">
              <span>Saúde</span>
              <span>R$ 1.200,03</span>
            </div>
            <div className="card-item">
              <span>Saídas aos finais de semana</span>
              <span>R$ 1.200,03</span>
            </div>
          </div>
        </div>

        {/* Metas de Abril */}
        <div className="card card-metas">
          <h3>Metas de Abril</h3>
          <div className="card-items">
            <div className="card-item">
              <div>
                <div>Alimentação</div>
                <div>Meta: R$ 300,00</div>
                <div>Gasto: R$ 200,00</div>
              </div>
            </div>
            <div className="card-item">
              <div>
                <div>Saídas aos finais de semana</div>
                <div>Meta: R$ 300,00</div>
                <div>Gasto: R$ 200,00</div>
              </div>
            </div>
            <div className="card-item">
              <div>
                <div>Assinaturas com streaming</div>
                <div>Meta: R$ 300,00</div>
                <div>Gasto: R$ 200,00</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopayDashboard;