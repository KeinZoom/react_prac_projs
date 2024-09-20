import { useState } from "react";
import MenuList from "./menu_list";
import "./styles.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

function MenuItem({ menuItem = {} }) {
  const [enableExpandNode, SetEnableExpandNone] = useState({});

  function handleClickExpansion(label) {
    SetEnableExpandNone({
      ...enableExpandNode,
      [label]: !enableExpandNode[label],
    });
  }

  return (
    <li className="listItem">
      <div
        className={
          menuItem.children && menuItem.children.length
            ? "label_click"
            : "label_no_click"
        }
        onClick={() => {
          handleClickExpansion(menuItem.label);
        }}
      >
        <div>{menuItem.label}</div>
        <div className="clickIcon">
          {menuItem.children &&
            menuItem.children.length &&
            (enableExpandNode[menuItem.label] ? (
              <FaMinusSquare size={20} />
            ) : (
              <FaPlusSquare size={20} />
            ))}
        </div>
      </div>

      {menuItem.children &&
        menuItem.children.length &&
        enableExpandNode[menuItem.label] && (
          <MenuList getList={menuItem.children} />
        )}
    </li>
  );
}

export default MenuItem;
