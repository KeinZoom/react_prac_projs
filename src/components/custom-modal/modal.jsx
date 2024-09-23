import "./modal.css";

function Modal({ handlePopClick, header, body, footer }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="close__modal__icon" onClick={handlePopClick}>
          &times;
        </div>
        <div className="modal__header">
          <h2>{header ? header : "header"}</h2>
        </div>
        <div className="modal__body">
          <p>{body ? body : "body"}</p>
        </div>
        <div className="modal__footer">
          <p>{footer ? footer : "footer"}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
