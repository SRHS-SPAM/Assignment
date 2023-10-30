export default function Navbar() {
  const NavBarList = [
    { navItem: "인기도서" },
    { navItem: "신착도서" },
    { navItem: "장르별" },
  ];

  return (
    <div>
      {NavBarList.map((item, i) => (
        <NavItem
          key={i}
          onClick={() => {
            setFocusedItem(item.navItem);
          }}
          className={focusedItem == item.navItem ? "navItem-focus" : null}
        >
          {item.navItem}
        </NavItem>
      ))}
    </div>
  );
}
