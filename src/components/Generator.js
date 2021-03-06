import { faBreadLoaf } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import useToast from "../hooks/useToast.js";
import toastQuotes from "../toastQuotes.json";

function selectRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const Generator = () => {
  const { addToast } = useToast();

  const { quotation } = selectRandom(toastQuotes);

  return (
    <Container>
      <Content>
        <Toast icon={faBreadLoaf} />
        <Text onClick={() => addToast(quotation)}>Cook some toast.</Text>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: #405362;
  color: #fdf4d8;
  display: flex;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Toast = styled(FontAwesomeIcon)`
  font-size: 48pt;
`;

const Text = styled.p`
  font-size: 36pt;
  border-bottom: 10px solid;
  cursor: pointer;
`;

export default Generator;
