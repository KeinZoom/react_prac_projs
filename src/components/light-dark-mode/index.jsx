import useLocalState from "./useLocalState";
import "./styles.css";

function LightDarkMode() {
  const [theme, setTheme] = useLocalState("theme", "dark");

  function handleModeClick() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="modeContainer" data-theme={theme}>
      <h1>Hello World!</h1>
      <button className="modeBtn" onClick={handleModeClick}>
        Change
      </button>
    </div>
  );
}

export default LightDarkMode;
