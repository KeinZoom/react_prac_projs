import { useState } from "react";
import data from "./data";
import "./Accordian.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSwitch, setMultiSwitch] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  function itemSelected(dataId) {
    if (!multiSwitch) {
      setSelected(selected === dataId ? null : dataId);
    } else {
      let searchIndex = multiSelected.indexOf(dataId);
      const tempSelected = [...multiSelected];

      if (searchIndex === -1) {
        tempSelected.push(dataId);
      } else {
        tempSelected.splice(searchIndex, 1);
      }

      setMultiSelected([...tempSelected]);
    }
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setMultiSwitch(!multiSwitch);
          setSelected(null);
          setMultiSelected([]);
        }}
      >
        Enable Multi Selection
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => {
          return (
            <div className="item" key={dataItem.id}>
              <div className="question">{dataItem.question}</div>
              <button onClick={() => itemSelected(dataItem.id)}>+</button>
              {multiSwitch
                ? multiSelected.find((element) => element === dataItem.id) && (
                    <div className="answear">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="answear">{dataItem.answer}</div>
                  )}
            </div>
          );
        })
      ) : (
        <div>data not found</div>
      )}
    </div>
  );
}

export default Accordian;
