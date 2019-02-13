import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { PoseGroup } from "react-pose";
import styled from "styled-components";
import Toast from "./Toast";
import { ToastContext } from "./ToastProvider";

const ToastContainer = ({ timeout }) => {
  const { toasts } = useContext(ToastContext);

  return ReactDOM.createPortal(
    <Container>
      <PoseGroup>
        {toasts.map(({ message, id }) => (
          <Toast message={message} key={id} timeout={timeout} />
        ))}
      </PoseGroup>
    </Container>,
    document.body
  );
};

const Container = styled.div`
  width: 40vw;
  background: transparent;
  position: fixed;
  top: 0;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
`;

export default ToastContainer;
