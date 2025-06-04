import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Navbar from 'src/components/Navbar/navbar.jsx';
import CaixinhasSection from 'src/components/Caixinhas/CaixinhasSection.jsx';
import SugestoesConsumo from 'src/components/SugestoesConsumo/SugestoesConsumo';
import AlertasGastos from 'src/pages/dashboardFinanceiro/AlertasGastos.jsx';

const historicoFicticio = [
  { categoria: 'Alimentação', valor: 200 },
  { categoria: 'Streaming', valor: 200 },
  { categoria: 'Transporte', valor: 700 },
  { categoria: 'Delivery', valor: 500 },
];

function PopayDashboard() {
  const navigate = useNavigate();

  const irParaCadastro = () => {
    navigate('/cadastro');
  };

    const irParaGastosFuturos = () => {
    navigate('/gastos');
  };


  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        {/* Cartões Resumo */}
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Olá Kacey Musgraves!</h3>
            <div className="value-box value-income">
              receita mensal <br /> +832,92
            </div>
          </div>

          <div className="summary-card">
            <h3>Kacey, confira o acúmulo de suas despesas!</h3>
            <div className="value-box value-expense">
              despesa mensal <br /> -832,92
            </div>
          </div>

          <div className="summary-card">
            <h3>
              saldo geral <br /> R$ 22.321,20
            </h3>
            <button onClick={irParaGastosFuturos} className="report-button">📊 ver relatórios</button>
          </div>

          <div className="summary-card">
            <h3>Acesso rápido</h3>
            <div className="quick-access-buttons">
              <button onClick={irParaCadastro} className="quick-button income-button">
                Cadastrar Movimentação
              </button>
            </div>
          </div>
        </div>

        <AlertasGastos />
        
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
            {[
              { nome: 'NuConta', tipo: 'conta corrente' },
              { nome: 'CAIXA', tipo: 'conta poupança' },
              { nome: 'Banco do Brasil', tipo: 'conta corrente' },
              { nome: 'Banco Itaú', tipo: 'conta poupança' },
            ].map((conta, index) => (
              <div key={index} className="account-item">
                <div>
                  <strong>{conta.nome}</strong>
                  <br />
                  <span>{conta.tipo}</span>
                </div>
                <div className="account-value">R$ 1.200,03</div>
              </div>
            ))}
          </div>
        </section>

        {/* Maiores Gastos + Metas de Abril lado a lado */}
        <section className="card-row">
          {/* Maiores Gastos */}
          <div className="card card-gastos">
            <h3>Kacey, aqui estão seus maiores gastos dos últimos 30 dias</h3>
            <div className="card-items">
              {[
                { categoria: 'Alimentação', valor: 'R$ 1.200,03' },
                { categoria: 'Saúde', valor: 'R$ 1.200,03' },
                { categoria: 'Saídas aos finais de semana', valor: 'R$ 1.200,03' },
              ].map((gasto, index) => (
                <div key={index} className="card-item">
                  <span>{gasto.categoria}</span>
                  <span>{gasto.valor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metas de Abril */}
          <div className="card card-metas">
            <h3>Metas de Abril</h3>
            <div className="card-items">
              {[
                { categoria: 'Alimentação', meta: 'R$ 300,00', gasto: 'R$ 200,00' },
                { categoria: 'Saídas aos finais de semana', meta: 'R$ 300,00', gasto: 'R$ 200,00' },
                { categoria: 'Assinaturas com streaming', meta: 'R$ 300,00', gasto: 'R$ 200,00' },
              ].map((meta, index) => (
                <div key={index} className="card-item">
                  <div>
                    <div>{meta.categoria}</div>
                    <div>Meta: {meta.meta}</div>
                    <div>Gasto: {meta.gasto}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
            <CaixinhasSection />
          
        </section>
        <SugestoesConsumo historico={historicoFicticio} />
      </div>
    </>
  );
}

export default PopayDashboard;
