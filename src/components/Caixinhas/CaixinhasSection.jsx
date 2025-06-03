import React, { useState, useEffect } from 'react';
import CaixinhaModal from './CaixinhaModal';
import './Caixinhas.css';

const CaixinhasSection = () => {
  const [caixinhas, setCaixinhas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);

  // Carregar do localStorage ao iniciar
  useEffect(() => {
    const armazenadas = localStorage.getItem('popayCaixinhas');
    if (armazenadas) {
      try {
        const parsed = JSON.parse(armazenadas);
        if (Array.isArray(parsed)) {
          setCaixinhas(parsed);
        }
      } catch (e) {
        console.error("Erro ao carregar caixinhas do localStorage:", e);
      }
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('popayCaixinhas', JSON.stringify(caixinhas));
  }, [caixinhas]);

  const adicionarCaixinha = (novaCaixinha) => {
    const atualizadas = [...caixinhas, novaCaixinha];
    setCaixinhas(atualizadas);
    setModalAberto(false);
  };

  return (
    <section className="caixinhas-section">
      <h3>Minhas Caixinhas</h3>
      {caixinhas.length === 0 ? (
        <div className="sem-caixinhas">
          <p>Você ainda não tem caixinhas criadas.</p>
          <button onClick={() => setModalAberto(true)} className="botao-criar">
            Criar Caixinha
          </button>
        </div>
      ) : (
        <div className="lista-caixinhas">
          {caixinhas.map((c, i) => (
            <div className="caixinha-card" key={i}>
              <strong>{c.nome}</strong>
              <p>R$ {parseFloat(c.valor).toFixed(2)}</p>
            </div>
          ))}
          <button onClick={() => setModalAberto(true)} className="botao-criar menor">
            +
          </button>
        </div>
      )}

      {modalAberto && (
        <CaixinhaModal
          onClose={() => setModalAberto(false)}
          onSave={adicionarCaixinha}
        />
      )}
    </section>
  );
};

export default CaixinhasSection;
