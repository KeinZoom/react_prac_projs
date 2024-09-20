import MenuList from "./menu_list";
import "./styles.css";

function TreeView({ MenuData = [] }) {
  return (
    <div className="tree">
      <MenuList getList={MenuData} />
    </div>
  );
}

export default TreeView;
