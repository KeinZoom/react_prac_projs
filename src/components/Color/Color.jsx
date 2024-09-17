import { useState } from "react";
import "./Color.css";

function Color() {
  const [colorGroup, setColorGroup] = useState({
    hex: "#000000",
    rgb: [0, 0, 0],
  });
  const [enableRGB, setEnableRGB] = useState(false);

  function generateColor(rgbSwitch) {
    let newColor = null;
    if (!rgbSwitch) {
      newColor = "#";
      const elements = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
      ];
      for (let i = 0; i < 6; i++) {
        newColor += elements[Math.round(Math.random() * (elements.length - 1))];
      }
      setColorGroup({ hex: newColor, rgb: [...colorGroup.rgb] });
    } else {
      newColor = [0, 0, 0];
      for (let i = 0; i < newColor.length; i++) {
        newColor[i] = Math.round(Math.random() * 255);
      }
      setColorGroup({ hex: colorGroup.hex, rgb: [...newColor] });
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundColor: enableRGB
          ? `rgb(${colorGroup.rgb[0]}, ${colorGroup.rgb[1]}, ${colorGroup.rgb[2]})`
          : colorGroup.hex,
      }}
    >
      <div className="btn_list">
        <button
          onClick={() => {
            setEnableRGB(false);
            generateColor(false);
          }}
        >
          Create HEX Color
        </button>
        <button
          onClick={() => {
            setEnableRGB(true);
            generateColor(true);
          }}
        >
          Create RGB Color
        </button>
        <button onClick={() => generateColor(enableRGB)}>
          Generate Random Color
        </button>
      </div>
      <div
        className="displayBlock"
        style={{
          color: enableRGB
            ? `rgb(${colorGroup.rgb[0]}, ${colorGroup.rgb[1]}, ${colorGroup.rgb[2]})`
            : colorGroup.hex,
        }}
      >
        {enableRGB
          ? `rgb(${colorGroup.rgb[0]}, ${colorGroup.rgb[1]}, ${colorGroup.rgb[2]})`
          : colorGroup.hex}
      </div>
    </div>
  );
}

export default Color;
