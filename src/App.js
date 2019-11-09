import React from "react";
import "./App.css";

import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img id="logo" src={logo} alt="Konnectus" />
      <div className="content">
        <p>
          <strong>Menos</strong> dores, <strong>Mais</strong> conexões
        </p>

        <form>
          <label htmlFor="user">Usuário</label>
          <input type="user" id="user" placeholder="Usuário" />
          <br />
          <label htmlFor="password">Senha </label>
          <input type="password" id="password" placeholder="Senha" />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
