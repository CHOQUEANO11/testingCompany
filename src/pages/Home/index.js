import React, { useState } from "react";
import Buttom from "../.././components/Buttom";
import Loader from "../../components/Loading";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [visibled, setVisibled] = useState(true);

  const visible = () => {
    setVisibled(!visibled);
    if (!visibled) {
      setTimeout(() => {
        history.push("/list-message");
      }, 2000);
    }
  };
  return (
    <>
      <Header />
      <div className="MyView">
        <div class="container">
        {visibled ? (
          <>
            <span className="Text">
              {" "}
              Verifique a validade de uma lista de mensagens 👍
            </span>

            <Buttom onPress={visible} />

            <h2 className="TextTwo">
              Selecione um arquivo CSV para iniciar a verificação de uma lista
              com números e mensagens de SMS.
            </h2>

            <h4 className="TextThree">
              Use nosso{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                modelo
              </span>{" "}
              de arquivo se você tem alguma dúvidas.
            </h4>
          </>
        ) : (
          <Loader onPress={() => window.location.reload()} />
        )}
        </div>
      </div>
    </>
  );
}

export default Home;
