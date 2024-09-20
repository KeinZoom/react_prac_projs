import MenuList from "./menu_list";

function MenuItem({ menuItem = {} }) {
  console.log(menuItem);
  return (
    <li>
      <div>{menuItem.label}</div>
      <div>{menuItem.children && menuItem.children.length ? "+" : null}</div>

      {menuItem.children && menuItem.children.length && (
        <MenuList getItem={menuItem.children} />
      )}
    </li>
  );
}

export default MenuItem;
