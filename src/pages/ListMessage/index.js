import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";
import Icon from "../../assets/icons/icon01.png";
import IconTwo from "../../assets/icons/icon02.png";

const profiles = [
  {
    name: "Jane Doe",
    game: "Stardew Valley",
    subscriber: "false",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
  {
    name: "John Doe",
    game: "Dragon Quest XI",
    subscriber: "true",
  },
];

function ListMessage() {
  const history = useHistory();

  return (
    <>
      <Header />
      <div className="MyView">
        <div class="main-container">
          <div class="table-container">
            <div class="table-row heading">
              <div class="row-item">name</div>
              <div class="row-item">game</div>
              <div class="row-item">subscriber</div>
            </div>
            {profiles.map((item) => {
              return (
                <div class="table-row">
                  <>
                    <div class="row-item">{item.name}</div>
                    <div class="row-item">{item.game}</div>
                    <div class="row-item">{item.subscriber}</div>
                  </>
                </div>
              );
            })}
          </div>
        </div>
        <h2>Pronto para prosseguir? 🤔</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button className="btn01" onClick={() => history.push("/")}>
            <span className="textTwos">Cancelar</span>
            <img className="imgTwo" src={IconTwo} alt="" />
          </button>
          <button className="btn02" onClick={() => history.push("/save-list")}>
            <span className="textOne">Salvar lista</span>
            <img className="img" src={Icon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ListMessage;
