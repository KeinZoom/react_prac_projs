import MenuItem from "./menu_item";
import "./styles.css";

function MenuList({ getList = [] }) {
  return (
    <ul className="list__container">
      {getList && getList.length
        ? getList.map((getItem, index) => {
            return <MenuItem menuItem={getItem} key={index} />;
          })
        : null}
    </ul>
  );
}

export default MenuList;
