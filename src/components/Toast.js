import { faTimes } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import posed from "react-pose";
import styled from "styled-components";

const Toast = ({ autoClose = 3000, message }) => {
  const [show, setShow] = useState(true);
  const [render, setRender] = useState(true);

  useEffect(() => {
    let viewTimer = setTimeout(() => setShow(false), autoClose);
    let renderTimer = setTimeout(() => setRender(false), autoClose + 200);

    return () => {
      clearTimeout(viewTimer);
      clearTimeout(renderTimer);
    };
  }, []);

  return (
    render && (
      <Container pose={show ? "visible" : "hidden"} initialPose="hidden">
        <MainRow>
          <ChildContainer>{message}</ChildContainer>
          <CloseContainer>
            <CloseButton type="button" onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
          </CloseContainer>
        </MainRow>
        <TimeoutStrip
          pose={show ? "visible" : "hidden"}
          initialPose="hidden"
          duration={autoClose}
        />
      </Container>
    )
  );
};

Toast.propTypes = {
  autoClose: PropTypes.number,
  message: PropTypes.string.isRequired
};

const PosedContainer = posed.li({
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: {
      opacity: { ease: "easeOut", duration: 200 },
      default: { ease: "linear", duration: 200 }
    }
  },
  hidden: { opacity: 0, scaleY: 0 }
});

const Container = styled(PosedContainer)`
  width: 95%;
  height: 128px;
  display: flex;
  flex-direction: column;
  margin: 24px auto 0;
  background-color: #fdf4d8;
  border-radius: 2px;
`;

const MainRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  color: #ababab;
  background-color: transparent;
`;

const ChildContainer = styled.div`
  width: 90%;
  font-size: 12pt;
  font-weight: bold;
  margin: auto 5%;
  color: #405362;
`;

const CloseContainer = styled.div`
  width: 10%;
  margin: auto;
`;

const PosedStrip = posed.div({
  visible: {
    scaleX: 1,
    transition: {
      default: ({ duration }) => ({ ease: "linear", duration })
    }
  },
  hidden: { scaleX: 0 }
});

const TimeoutStrip = styled(PosedStrip)`
  width: 100%;
  transition: width 5s;
  height: 2px;
  background-color: #9fe2e3;
  position: relative;
  bottom: 0px;
`;

export default Toast;
