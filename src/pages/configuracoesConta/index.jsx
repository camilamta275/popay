import React, { useState } from 'react';
import './style.css';
import Navbar from 'src/components/Navbar/navbar.jsx';

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
    const confirmar = window.confirm('Tem certeza que deseja excluir sua conta?');
    if (confirmar) {
      alert('Conta excluída.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="account-settings-container">
        <div className="account-card">
          <h2>Configurações da Conta</h2>

          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (erroEmail) setErroEmail('');
            }}
            className={erroEmail ? 'erro-input' : ''}
          />
          {erroEmail && <p className="erro-mensagem">{erroEmail}</p>}

          <label htmlFor="senha">Nova Senha</label>
          <input
            id="senha"
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
    </>
  );
}

export default AccountSettings;
