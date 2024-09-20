import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./styles.css";

function GenerateQR() {
  const [typeText, setTypeText] = useState("");
  const [qrInfo, setQrInfo] = useState("");

  function handleGenerate() {
    setQrInfo(typeText);
    setTypeText("");
  }

  return (
    <div className="qr_generator_container">
      <div className="titleInput__container">
        <p className="header__title">QR code generator</p>
        <input
          type="text"
          name="ID"
          value={typeText}
          onChange={(e) => setTypeText(e.target.value)}
          placeholder="Enter your Info"
          style={{ padding: "0.5rem 1rem" }}
        />
      </div>

      <button
        disabled={typeText && typeText.trim !== "" ? false : true}
        onClick={handleGenerate}
        style={{ padding: "0.5rem 1rem" }}
      >
        click to generate
      </button>
      <QRCodeSVG value={qrInfo} size={100} />
    </div>
  );
}

export default GenerateQR;
