import React, { useState } from 'react'; // 1. Corrigido: useState importado
import './style.css';
import { useNavigate } from 'react-router-dom';
import Navbar from 'src/components/Navbar/Navbar.jsx'; // Convenção de nome de arquivo

function AccountSettings() {
  const navigate = useNavigate();

  const irParaLandingPage = () => {
    navigate('/');
  };

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(''); // Considere se realmente quer exibir a senha digitada aqui
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
    console.log('Dados para salvar:', { nome, email, senha }); // Evitar logar senha em produção
    alert('Alterações salvas! (Simulação)');
    // Aqui viria a lógica de API para salvar os dados
    // setSenha(''); // Limpar campo de senha após salvar por segurança
  };

  // 2. Lógica de sair da conta corrigida
  const handleLogout = () => {
    const confirmar = window.confirm('Tem certeza que deseja sair da sua conta?');
    if (confirmar) {
      alert('Saindo...');
      // Lógica de logout real aqui (ex: limpar tokens, chamar API de logout)
      irParaLandingPage(); // Navegar após confirmação e lógicas de logout
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
            placeholder="Deixe em branco para não alterar" // Sugestão
            onChange={(e) => setSenha(e.target.value)}
          />

          <button className="save-button" onClick={handleSave}>
            Salvar Alterações
          </button>

          <hr />

          <button className="delete-button" onClick={handleLogout}> {/* onClick alterado */}
            Sair da Conta
          </button>
        </div>
      </div>
    </>
  );
}

export default AccountSettings;