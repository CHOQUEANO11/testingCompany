import React from "react";

import { Container, Title } from "./styles";

function Buttom(props) {
  const { onPress } = props;
  return (
    <Container>
      <Title onClick={onPress}>Selecione a lista</Title>
    </Container>
  );
}

export default Buttom;
