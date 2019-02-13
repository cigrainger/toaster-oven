import { faBreadLoaf } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styled from "styled-components";
import { ToastContext } from "./ToastProvider";

const Generator = () => {
  const { addToast } = useContext(ToastContext);

  return (
    <Container>
      <Content>
        <Toast icon={faBreadLoaf} />
        <Text onClick={() => addToast({ message: "Test" })}>
          Cook some toast.
        </Text>
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
