import { faTimes } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import posed from "react-pose";
import styled from "styled-components";
import useTimeout from "../hooks/useTimeout";
import useToast from "../hooks/useToast";

const Toast = ({ timeout, message, id }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    let timer = setTimeout(() => removeToast(id), timeout);
    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <Container>
      <MainRow>
        <ChildContainer>{message}</ChildContainer>
        <CloseContainer>
          <CloseButton type="button" onClick={() => removeToast(id)}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </CloseContainer>
      </MainRow>
      <TimeoutStrip pose={"visible"} initialPose="hidden" duration={timeout} />
    </Container>
  );
};

Toast.propTypes = {
  autoClose: PropTypes.number,
  message: PropTypes.string.isRequired
};

const Container = styled.li`
  width: 95%;
  height: 128px;
  display: flex;
  flex-direction: column;
  margin: 24px auto 0;
  background-color: #fdf4d8;
  border-radius: 2px;
  transform-origin-y: 0%;
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
