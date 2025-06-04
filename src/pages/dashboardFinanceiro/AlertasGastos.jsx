import React, { useState } from "react";
import "./AlertasGastos.css";

const AlertasGastos = () => {
  const [categorias, setCategorias] = useState([
    {
      id: "alimentacao",
      nome: "Alimentação",
      icone: "🍽️",
      atual: 200,
      meta: 300,
      cor: "#10b981",
    },
    {
      id: "weekend",
      nome: "Saídas aos finais de semana",
      icone: "🎉",
      atual: 200,
      meta: 300,
      cor: "#059669",
    },
    {
      id: "streaming",
      nome: "Assinaturas com streaming",
      icone: "📺",
      atual: 200,
      meta: 300,
      cor: "#047857",
    },
    {
      id: "delivery",
      nome: "Delivery",
      icone: "🛵",
      atual: 150,
      meta: 200,
      cor: "#065f46",
    },
  ]);

  const obterNivelAlerta = (atual, meta) => {
    const porcentagem = (atual / meta) * 100;
    if (porcentagem >= 90) return "perigo";
    if (porcentagem >= 75) return "atencao";
    return "seguro";
  };

  const obterMensagemAlerta = (nivel, categoria, porcentagem) => {
    switch (nivel) {
      case "perigo":
        return `⚠️ ALERTA: ${categoria} já atingiu ${porcentagem.toFixed(
          1
        )}% da meta!`;
      case "atencao":
        return `⚡ ATENÇÃO: ${categoria} está em ${porcentagem.toFixed(
          1
        )}% da meta.`;
      default:
        return null;
    }
  };

  return (
    <section className="alertas-gastos-section">
      <h3>Alertas de Gastos - Abril 2025</h3>

      {/* Alertas Ativos */}
      <div className="alertas-ativos">
        {categorias.map((categoria) => {
          const porcentagem = (categoria.atual / categoria.meta) * 100;
          const nivel = obterNivelAlerta(categoria.atual, categoria.meta);
          const mensagem = obterMensagemAlerta(
            nivel,
            categoria.nome,
            porcentagem
          );

          if (!mensagem) return null;

          return (
            <div key={categoria.id} className={`alerta-item alerta-${nivel}`}>
              <span className="alerta-icone">{categoria.icone}</span>
              <span className="alerta-texto">{mensagem}</span>
            </div>
          );
        })}

        {categorias.every(
          (cat) => obterNivelAlerta(cat.atual, cat.meta) === "seguro"
        ) && (
          <div className="alerta-item alerta-seguro">
            <span className="alerta-icone">✅</span>
            <span className="alerta-texto">
              Parabéns! Todos os gastos estão dentro das metas.
            </span>
          </div>
        )}
      </div>

      {/* Progress das Metas */}
      <div className="metas-progress">
        {categorias.map((categoria) => {
          const porcentagem = (categoria.atual / categoria.meta) * 100;
          const nivel = obterNivelAlerta(categoria.atual, categoria.meta);

          return (
            <div key={categoria.id} className="meta-item">
              <div className="meta-header">
                <div className="meta-info">
                  <span className="meta-icone">{categoria.icone}</span>
                  <span className="meta-nome">{categoria.nome}</span>
                </div>
                <div className="meta-valores">
                  <span className="meta-valor">
                    R$ {categoria.atual.toFixed(2)} / R${" "}
                    {categoria.meta.toFixed(2)}
                  </span>
                  <span className={`meta-porcentagem meta-${nivel}`}>
                    {porcentagem.toFixed(1)}%
                  </span>
                </div>
              </div>

              <div className="meta-progress-bar">
                <div
                  className={`meta-progress-fill meta-fill-${nivel}`}
                  style={{ width: `${Math.min(porcentagem, 100)}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumo Geral */}
      <div className="resumo-gastos">
        <h4>Resumo do Mês</h4>
        <div className="resumo-items">
          <div className="resumo-item">
            <span>Total de Metas:</span>
            <span>
              R$ {categorias.reduce((sum, cat) => sum + cat.meta, 0).toFixed(2)}
            </span>
          </div>
          <div className="resumo-item">
            <span>Total Gasto:</span>
            <span>
              R${" "}
              {categorias.reduce((sum, cat) => sum + cat.atual, 0).toFixed(2)}
            </span>
          </div>
          <div className="resumo-item resumo-saldo">
            <span>Saldo Disponível:</span>
            <span>
              R${" "}
              {(
                categorias.reduce((sum, cat) => sum + cat.meta, 0) -
                categorias.reduce((sum, cat) => sum + cat.atual, 0)
              ).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertasGastos;
