import PropTypes from "prop-types";
import React, { useReducer } from "react";
import Toast from "./Toast";

export const ToastContext = React.createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [...state, { message: action.message, id: action.id }];
      case "remove":
        return state.filter(({ id }) => {
          return id !== action.id;
        });
      default:
        return state;
    }
  }, []);

  console.log(toasts);

  return (
    <ToastContext.Provider value={{ toasts, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
};

Toast.propTypes = {
  maxToasts: PropTypes.number,
  children: PropTypes.node
};

export default ToastProvider;
