import { createContext, useEffect, useState } from "react";
import FeatureFlagsCall from "../data";

export const FeatureFlagsContext = createContext(null);

function GlobalFeatureFlagsState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFeatures, setEnableFeatures] = useState({});

  async function fetchFeatureFlagsConfig() {
    try {
      setLoading(true);
      const data = await FeatureFlagsCall();
      setEnableFeatures(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlagsConfig();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enableFeatures }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export default GlobalFeatureFlagsState;
