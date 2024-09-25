import { useLayoutEffect } from "react";
import { useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function configWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    configWindowSize();
    window.addEventListener("resize", configWindowSize);

    return () => window.removeEventListener("resize", configWindowSize);
  }, []);

  return windowSize;
}

export default useWindowSize;
