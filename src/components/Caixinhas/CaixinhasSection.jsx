import React, { useState, useEffect } from 'react';
import CaixinhaModal from './CaixinhaModal';
import './Caixinhas.css';

const CaixinhasSection = () => {
  const [caixinhas, setCaixinhas] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [caixinhaEmEdicao, setCaixinhaEmEdicao] = useState(null);

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
        setCaixinhas([]);
      }
    }
  }, []);

  // Salvar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem('popayCaixinhas', JSON.stringify(caixinhas));
  }, [caixinhas]);

  const abrirModalParaNovaCaixinha = () => {
    setCaixinhaEmEdicao(null);
    setModalAberto(true);
  };

  const abrirModalParaEditar = (caixinha) => {
    setCaixinhaEmEdicao(caixinha);
    setModalAberto(true);
  };

  const handleSalvarCaixinha = (dadosCaixinha) => {
    if (caixinhaEmEdicao && dadosCaixinha.id) {
      setCaixinhas(
        caixinhas.map((c) =>
          c.id === dadosCaixinha.id ? { ...c, ...dadosCaixinha } : c
        )
      );
    } else {
      const novaCaixinhaComId = {
        ...dadosCaixinha,
        id: Date.now(),
      };
      setCaixinhas([...caixinhas, novaCaixinhaComId]);
    }
    setModalAberto(false);
    setCaixinhaEmEdicao(null);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setCaixinhaEmEdicao(null);
  };

  const handleExcluirCaixinha = (idParaExcluir) => {
    // Adiciona uma confirmação antes de excluir
    if (window.confirm("Tem certeza que deseja excluir esta caixinha?")) {
      setCaixinhas(caixinhas.filter(c => c.id !== idParaExcluir));
    }
  };

  const calcularProgresso = (valor, meta) => {
    if (!meta || parseFloat(meta) <= 0 || !valor || parseFloat(valor) <= 0) {
      return 0;
    }
    const progresso = (parseFloat(valor) / parseFloat(meta)) * 100;
    return Math.min(progresso, 100);
  };

  return (
    <section className="caixinhas-section">
      <h3>Minhas Caixinhas</h3>
      {caixinhas.length === 0 ? (
        <div className="sem-caixinhas">
          <p>Você ainda não tem caixinhas criadas.</p>
          <button onClick={abrirModalParaNovaCaixinha} className="botao-criar">
            Criar Caixinha
          </button>
        </div>
      ) : (
        <div className="lista-caixinhas">
          {caixinhas.map((c) => {
            const progresso = calcularProgresso(c.valor, c.meta);
            return (
              <div className="caixinha-card" key={c.id}>
                <div className="caixinha-header">
                  <strong>{c.nome}</strong>
                  <div className="caixinha-card-actions"> {/* Novo container para botões */}
                    <button onClick={() => abrirModalParaEditar(c)} className="botao-editar-caixinha">
                      Editar
                    </button>
                    <button onClick={() => handleExcluirCaixinha(c.id)} className="botao-excluir-caixinha">
                      Excluir
                    </button>
                  </div>
                </div>
                <p>
                  Valor: R$ {parseFloat(c.valor).toFixed(2)}
                  {c.meta && parseFloat(c.meta) > 0 && (
                    <span> / Meta: R$ {parseFloat(c.meta).toFixed(2)}</span>
                  )}
                </p>
                {c.meta && parseFloat(c.meta) > 0 && (
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar"
                      style={{ width: `${progresso}%` }}
                    >
                      {progresso.toFixed(0)}%
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <button onClick={abrirModalParaNovaCaixinha} className="botao-criar menor">
            +
          </button>
        </div>
      )}

      {modalAberto && (
        <CaixinhaModal
          onClose={handleFecharModal}
          onSave={handleSalvarCaixinha}
          caixinhaExistente={caixinhaEmEdicao}
        />
      )}
    </section>
  );
};

export default CaixinhasSection;