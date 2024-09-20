import MenuList from "./menu_list";

function TreeView(MenuData) {
  return <MenuList getList={MenuData} />;
}

export default TreeView;
