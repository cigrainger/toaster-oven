import PropTypes from "prop-types";
import React, { useReducer } from "react";
import Toast from "./Toast";

export const ToastContext = React.createContext(null);

const initialState = [];

function partialReducer(maxToasts) {
  return function(state, action) {
    switch (action.type) {
      case "reset":
        return initialState;
      case "add":
        return state.length === maxToasts
          ? [...state.slice(1), { content: action.content, id: action.id }]
          : [...state, { content: action.content, id: action.id }];
      case "remove":
        return state.filter(({ id }) => {
          return id !== action.id;
        });
      default:
        return state;
    }
  };
}

const ToastProvider = ({ children, maxToasts }) => {
  const reducer = partialReducer(maxToasts);
  const [toasts, dispatch] = useReducer(reducer, initialState);

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
