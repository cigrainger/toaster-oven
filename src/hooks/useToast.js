import { useContext } from "react";
import uuidv1 from "uuid/v1";
import { ToastContext } from "../components/ToastProvider";

const useToast = () => {
  const { toasts, dispatch } = useContext(ToastContext);

  const addToast = (message) => {
    dispatch({ type: "add", id: uuidv1(), message });
  };

  const removeToast = (id) => {
    dispatch({ type: "remove", id });
  };

  return { toasts, addToast, removeToast };
};

export default useToast;
