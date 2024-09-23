import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

function CustomModal() {
  const [enableModalPopup, setEnableModalPopup] = useState(false);

  function handlePopClick() {
    setEnableModalPopup(!enableModalPopup);
  }
  return (
    <div className="custom_modal_container">
      <button onClick={handlePopClick} className="pop__button">
        open modal popup
      </button>
      {enableModalPopup && (
        <Modal
          handlePopClick={handlePopClick}
          header={<div>header custom</div>}
          body={<div>body custom</div>}
          footer={<div>footer custom</div>}
        />
      )}
    </div>
  );
}

export default CustomModal;
