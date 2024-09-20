import MenuList from "./menu_list";

function TreeView({ MenuData = [] }) {
  console.log(MenuData);
  return (
    <div>
      <MenuList getList={MenuData} />
    </div>
  );
}

export default TreeView;
