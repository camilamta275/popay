import React, { useState, useEffect } from 'react';
import './Caixinhas.css';

const CaixinhaModal = ({ onClose, onSave, caixinhaExistente }) => {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [meta, setMeta] = useState('');

  useEffect(() => {
    if (caixinhaExistente) {
      setId(caixinhaExistente.id);
      setNome(caixinhaExistente.nome);
      setValor(String(caixinhaExistente.valor));
      setMeta(caixinhaExistente.meta ? String(caixinhaExistente.meta) : '');
    } else {
      // Reset para nova caixinha
      setId(null);
      setNome('');
      setValor('');
      setMeta('');
    }
  }, [caixinhaExistente]);

  const handleSalvar = () => {
    if (nome.trim() && valor) {
      onSave({
        id: id, // Se for nova, id será null aqui, e a CaixinhasSection gerará um novo
        nome: nome.trim(),
        valor: parseFloat(valor),
        meta: meta ? parseFloat(meta) : null, // Salva null se meta estiver vazia
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{caixinhaExistente ? 'Editar Caixinha' : 'Nova Caixinha'}</h2>
        <input
          type="text"
          placeholder="Nome da caixinha"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor atual"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          min="0"
          step="0.01"
        />
        <input
          type="number"
          placeholder="Meta (opcional)"
          value={meta}
          onChange={(e) => setMeta(e.target.value)}
          min="0"
          step="0.01"
        />
        <div className="modal-actions">
          <button onClick={onClose} className="botao-cancelar-modal">Cancelar</button>
          <button onClick={handleSalvar} className="botao-salvar-modal">Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default CaixinhaModal;