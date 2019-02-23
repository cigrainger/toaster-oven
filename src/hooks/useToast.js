import { useContext } from "react";
import uuidv1 from "uuid/v1";
import { ToastContext } from "../components/ToastProvider";

function useToast() {
  const { toasts, dispatch } = useContext(ToastContext);

  const addToast = (content) => {
    dispatch({ type: "add", id: uuidv1(), content });
  };

  const removeToast = (id) => {
    dispatch({ type: "remove", id });
  };

  return { toasts, addToast, removeToast };
}

export default useToast;
