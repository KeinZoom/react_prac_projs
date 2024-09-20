import { useEffect, useState } from "react";

function useLocalState(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let localValue;

    try {
      localValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error);
      localValue = defaultValue;
    }

    return localValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalState;
