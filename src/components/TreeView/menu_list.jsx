import MenuItem from "./menu_item";

function MenuList(getList) {
  return (
    <div>
      {getList &&
        getList.length &&
        getList.map((getItem) => {
          <MenuItem getItem={getItem} />;
        })}
    </div>
  );
}

export default MenuList;
