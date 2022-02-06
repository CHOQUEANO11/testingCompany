import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";

function SaveList() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="MyView">
        <h2 className="textOnes">É isso aí! 🚀</h2>
      <h3 className="textTwos">Sua lista está pronta para entrar em produção!</h3>
      <span className="textThrees">Já guardamos todos as mensagens válidas para que você possa usá-las em uma campanha no futuro.</span>
      <span className="textFours"><strong onClick={() => history.push('/')}  className="decoration">Voltar ao início</strong> para iniciar outra verificação</span>
      </div>
    </>
  );
}

export default SaveList;
