import MenuItem from './MenuItem';

function MenuList(props) {
    const menuItems = props.menuItems.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} addToOrder={props.addToOrder} />
    ));

    return (
        <div>{menuItems}</div>
    );
}

export default MenuList;