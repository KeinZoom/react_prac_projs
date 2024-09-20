import MenuItem from "./menu_item";

function MenuList({ getList = [] }) {
  console.log(getList);
  return (
    <ul>
      {getList && getList.length
        ? getList.map((getItem, index) => {
            console.log(getItem);
            return <MenuItem menuItem={getItem} key={index} />;
          })
        : null}
    </ul>
  );
}

export default MenuList;
