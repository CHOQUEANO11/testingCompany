import React from "react";
import IconLoader from "../../assets/icons/bx_bx-loader.png";

function Loading({ onPress }) {

  return (
   <div style={{display: 'flex',
      padding: '16px',
      alignItems: 'center',
      flexDirection: 'column'}}>
      <h1 className="Text">
        {" "}
        Estamos verificando todas as mensagens en seu arquivo...
      </h1>
      <img style={{display: 'flex', flexDirection: 'row', position: 'relative'}} src={IconLoader} alt="" />
      <h4 className="TextThree">
        você quer{" "}
        <span
          onClick={onPress}
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          cancelar e voltar ao início?
        </span>{" "}
      </h4>
      </div>
  );
}

export default Loading;
