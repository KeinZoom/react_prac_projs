import { useState } from "react";
import "./tabs.css";

function Tabs({ tabsContents, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleTabClick(curTabIndex) {
    setCurrentTabIndex(curTabIndex);
    onChange(curTabIndex);
  }

  return (
    <div className="tabs_container">
      <div className="labels_list">
        {tabsContents
          ? tabsContents.map((tabItem, index) => {
              return (
                <div
                  key={tabItem.id}
                  onClick={() => handleTabClick(index)}
                  className={`label_item ${
                    index === currentTabIndex ? "active" : "inactive"
                  }`}
                >
                  {tabItem.label}
                </div>
              );
            })
          : null}
      </div>
      <div style={{ marginTop: "18px", fontSize: "36px" }}>
        {tabsContents[currentTabIndex] && tabsContents[currentTabIndex].content}
      </div>
    </div>
  );
}

export default Tabs;
