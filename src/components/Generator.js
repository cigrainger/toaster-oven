import { faBreadLoaf } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import useToast from "../hooks/useToast.js";
import toastQuotes from "../toastQuotes.json";

const Generator = () => {
  const { addToast } = useToast();

  const { quotation } = toastQuotes[
    Math.floor(Math.random() * toastQuotes.length)
  ];

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
