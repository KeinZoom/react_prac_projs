import { useEffect, useState } from "react";

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fecthData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();

      setData(data);
      setPending(false);
    } catch (error) {
      console.log(error);
      setError(`${error}, some errors occurred`);
      setPending(false);
    }
  }

  useEffect(() => {
    fecthData();
  }, [url]);

  return [data, pending, error];
}

export default useFetch;
