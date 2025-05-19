import React, { useState } from 'react';
import './style.css';

function AccountSettings() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');

  const emailEhValido = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSave = () => {
    if (!emailEhValido(email)) {
      setErroEmail('Por favor, insira um e-mail válido.');
      return;
    }

    setErroEmail('');
    console.log({ nome, email, senha });
    alert('Alterações salvas!');
  };

  const handleDeleteAccount = () => {
    const confirmar = window.confirm("Tem certeza que deseja excluir sua conta?");
    if (confirmar) {
      alert('Conta excluída.');
    }
  };

  return (
    <div className="account-settings-container">
      <div className="account-card">
        <h2>Configurações da Conta</h2>

        <label>Nome</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (erroEmail) setErroEmail('');
          }}
          className={erroEmail ? 'erro-input' : ''}
        />
        {erroEmail && <p className="erro-mensagem">{erroEmail}</p>}

        <label>Nova Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className="save-button" onClick={handleSave}>
          Salvar Alterações
        </button>
        <hr />
        <button className="delete-button" onClick={handleDeleteAccount}>
          Excluir Conta
        </button>
      </div>
    </div>
  );
}

export default AccountSettings;
