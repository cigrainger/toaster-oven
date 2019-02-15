import React from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";
import useToast from "../hooks/useToast";
import Toast from "./Toast";

const ToastContainer = ({ timeout }) => {
  const { toasts } = useToast();

  return ReactDOM.createPortal(
    <Container>
      <PoseGroup>
        {toasts.map(({ message, id }) => (
          <PosedToast key={id}>
            <Toast message={message} id={id} timeout={timeout} />
          </PosedToast>
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

const PosedToast = posed.div({
  enter: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: "easeOut", duration: 200 },
      default: { ease: "linear", duration: 200 }
    }
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      opacity: { ease: "easeOut", duration: 200 },
      default: { ease: "linear", duration: 200 }
    }
  }
});

export default ToastContainer;
