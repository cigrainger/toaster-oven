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
        {toasts.map(({ content, id }) => (
          <PosedToastHolder key={id}>
            <Toast content={content} id={id} timeout={timeout} />
          </PosedToastHolder>
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

const ToastHolder = styled.div`
  transform-origin-y: 0%;
`;

const PosedToastHolder = posed(ToastHolder)({
  enter: {
    scaleY: 1,
    opacity: 1,
    transition: {
      default: { ease: "easeOut", duration: 300 }
    }
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: {
      default: { ease: "easeOut", duration: 300 }
    }
  }
});

export default ToastContainer;
