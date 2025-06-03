import React from 'react';
import './SugestoesConsumo.css';

const SUGESTOES_BASEADAS_EM_CATEGORIA = {
  'Alimentação': 'Considere preparar mais refeições em casa em vez de comer fora.',
  'Streaming': 'Verifique se está utilizando todos os serviços de streaming. Pode valer a pena cancelar algum.',
  'Transporte': 'Pense em usar transporte público ou bicicleta em trechos curtos para reduzir custos.',
  'Delivery': 'Reduza pedidos por aplicativos. Planeje refeições da semana e economize.',
  'Compras': 'Evite compras por impulso. Estabeleça um limite mensal.',
};

const SugestoesConsumo = ({ historico = [] }) => {
  const LIMITE_ALERTA = {
    'Alimentação': 1000,
    'Streaming': 100,
    'Transporte': 500,
    'Delivery': 300,
    'Compras': 600,
  };

  const sugestoes = historico
    .filter((item) => LIMITE_ALERTA[item.categoria] && item.valor > LIMITE_ALERTA[item.categoria])
    .map((item) => ({
      categoria: item.categoria,
      valor: item.valor,
      sugestao: SUGESTOES_BASEADAS_EM_CATEGORIA[item.categoria] || 'Reveja seus gastos nesta categoria.',
    }));

  return (
    <section className="sugestoes-section">
      <h3>Sugestões para reduzir gastos</h3>

      {sugestoes.length === 0 ? (
        <p className="nenhuma-sugestao">Seus hábitos estão sob controle! Continue assim 🎉</p>
      ) : (
        <div className="lista-sugestoes">
          {sugestoes.map((s, i) => (
            <div className="card-sugestao" key={i}>
              <strong>{s.categoria}</strong>
              <p>Gasto: R$ {s.valor.toFixed(2)}</p>
              <p className="texto-sugestao">{s.sugestao}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SugestoesConsumo;
