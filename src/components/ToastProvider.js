import PropTypes from "prop-types";
import React, { useState } from "react";
import Toast from "./Toast";

export const ToastContext = React.createContext(null);

const ToastProvider = ({ maxToasts, children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (newToast) => {
    const maxID = toasts.length ? toasts[toasts.length - 1].id : 0;
    let newToasts = [...toasts, { ...newToast, id: maxID + 1 }];
    if (newToasts.length > maxToasts) {
      newToasts = newToasts.slice(1);
    }
    setToasts(newToasts);
  };

  const removeToast = (toastToRemove) =>
    toasts.filter((toast) => toast !== toastToRemove);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

Toast.propTypes = {
  maxToasts: PropTypes.number,
  children: PropTypes.node
};

export default ToastProvider;
