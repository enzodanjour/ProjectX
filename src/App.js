import React from "react";
import "./App.css";

import logo from ".assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="Konnectus" />

      <div className="content">
        <p>
          Solucione suas demandas pontuais de forma rápida{" "}
          <strong>prática</strong> e <strong></strong>eficiente
        </p>
        <form>
          <label htmlFor="user">Usuário</label>
          <input type="user" id="user" placeholder="Usuário" />
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
