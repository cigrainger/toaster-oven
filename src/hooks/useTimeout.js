import { useEffect, useRef } from "react";

// Slight variation on Dan Abramov's 'Making setInterval Delarative'
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useTimeout = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay]);
};

export default useTimeout;
