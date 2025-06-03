import React, { useState } from 'react';
import './Caixinhas.css';

const CaixinhaModal = ({ onClose, onSave }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const handleSalvar = () => {
    if (nome.trim() && valor) {
      onSave({ nome, valor: parseFloat(valor) });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Nova Caixinha</h2>
        <input
          type="text"
          placeholder="Nome da caixinha"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor inicial"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleSalvar}>Salvar</button>
        </div>
      </div>
    </div>
  );
};

export default CaixinhaModal;
