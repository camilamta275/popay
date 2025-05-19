import React, { useState } from "react";
import "./style.css";

const loginConta = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    cpf: "",
    birthdate: "",
  });
  const [passwordStrength, setPasswordStrength] = useState("fraca");

  const usersKey = "usuarios";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") {
      updatePasswordStrength(value);
    }
  };

  const updatePasswordStrength = (senha) => {
    if (senha.length >= 8 && /[A-Z]/.test(senha) && /\d/.test(senha)) {
      setPasswordStrength("forte");
    } else if (senha.length >= 6) {
      setPasswordStrength("média");
    } else {
      setPasswordStrength("fraca");
    }
  };

  const handleRegister = () => {
    const { username, password, confirmPassword, cpf, birthdate } = form;

    if (!username || !password || !confirmPassword || !cpf || !birthdate) return;

    if (password !== confirmPassword) return;

    const usuarios = JSON.parse(localStorage.getItem(usersKey)) || [];

    usuarios.push({ username, password, cpf, birthdate });

    localStorage.setItem(usersKey, JSON.stringify(usuarios));
    alert("Cadastro realizado com sucesso!");
    setIsRegistering(false);
    setForm({ username: "", password: "", confirmPassword: "", cpf: "", birthdate: "" });
  };

  const handleLogin = () => {
    const { username, password } = form;
    const usuarios = JSON.parse(localStorage.getItem(usersKey)) || [];

    const found = usuarios.find((u) => u.username === username && u.password === password);
    if (found) {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválidos.");
    }
  };

  if (isLoggedIn) {
    return <div className="success-container">Login realizado com sucesso!</div>;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="titulo">Login</div>

        <div className="input-field">
          <label>Usuário</label>
          <input type="text" name="username" value={form.username} onChange={handleInputChange} />
        </div>

        <div className="input-field">
          <label>Senha</label>
          <input type="password" name="password" value={form.password} onChange={handleInputChange} />
        </div>

        {isRegistering && (
          <>
            <div className="password-strength">
              Força da senha:{" "}
              <span
                style={{
                  color:
                    passwordStrength === "forte"
                      ? "green"
                      : passwordStrength === "média"
                      ? "orange"
                      : "red",
                }}
              >
                {passwordStrength}
              </span>
            </div>

            <div className="input-field">
              <label>Confirmar senha</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-field">
              <label>CPF</label>
              <input type="text" name="cpf" value={form.cpf} onChange={handleInputChange} />
            </div>

            <div className="input-field">
              <label>Data de nascimento</label>
              <input type="date" name="birthdate" value={form.birthdate} onChange={handleInputChange} />
            </div>
          </>
        )}

        <div className="button-container">
          {isRegistering ? (
            <button onClick={handleRegister} disabled={passwordStrength !== "forte"}>
              Cadastrar
            </button>
          ) : (
            <button onClick={handleLogin}>Entrar</button>
          )}
        </div>

        <button className="switch-button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Já tenho uma conta" : "Quero me cadastrar"}
        </button>
      </div>
    </div>
  );
};

export default loginConta;
