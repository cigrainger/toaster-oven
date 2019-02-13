import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Toast from "./Toast";

const ToastContainer = styled.div`
  width: 40vw;
  background: transparent;
  position: fixed;
  top: 0;
  margin: 1% auto;
  display: flex;
  flex-direction: column;
`;

export const ToastContext = React.createContext(null);

const ToastProvider = ({ maxToasts, children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (newToast) => {
    const maxID = toasts.length ? toasts[toasts.length - 1].id : 0;
    newToast = { ...newToast, id: maxID + 1 };
    let newToasts = [...toasts, newToast];
    if (toasts.length > maxToasts) {
      newToasts = newToasts.slice(1);
    }
    setToasts(newToasts);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {ReactDOM.createPortal(
        <ToastContainer>
          {toasts.map(({ message, id }) => (
            <Toast message={message} key={id} />
          ))}
        </ToastContainer>,
        document.body
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;