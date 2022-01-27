import React from "react";
import "./Login.css";
import Api from "../Api";

export default ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    } else {
      alert("Login falhou!");
    }
  };

  return (
    <div className="login">
      <h2>Faça Login com o Facebook!</h2>
      <button onClick={handleFacebookLogin}>Logar com Facebook</button>
      <p>Esqueci minha senha</p>
    </div>
  );
};
