import "./side_bar.css";

const SIDEBAR_CONTENT = [
  {
    name: "Components",
    sublist: ["Add Exhibition", "View Exhibitions"],
  },
  {
    name: "Exhibitions",
    sublist: ["Add Exhibition", "View Exhibitions"],
  },
  {
    name: "Messages",
    sublist: ["Add Messages", "View Messages"],
  },
  {
    name: "Configuration",
  },
];

export const Sidebar = () => {
  function handleClick(e) {
    const targetElClass = e.currentTarget.classList;
    if (!targetElClass.contains("active")) {
      targetElClass.add("active");
    } else {
      targetElClass.remove("active");
    }
  }

  return (
    <ul className="sidebar-menu">
      {SIDEBAR_CONTENT.map((item) => {
        if (!!item.sublist) {
          return (
            <li>
              <a href="#" className="have-children" onClick={handleClick}>
                <span class="fa"></span>
                {item.name}
              </a>
              <ul className="sidebar-subnav">
                {item.sublist.map((item_) => (
                  <li>
                    <a href="#">{item_}</a>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={item.name + Math.random()}>
              <a href="#">{item.name}</a>
            </li>
          );
        }
      })}
    </ul>
  );
};
