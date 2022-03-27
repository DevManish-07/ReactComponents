import "./side_bar.css";
import { Link } from "react-router-dom";

const SIDEBAR_CONTENT = [
  {
    name: "Accordion",
    sublist: [{ name: "Basic", link: "/accordion/basic" }],
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
              <div
                to="/accordion"
                className="have-children link"
                onClick={handleClick}
              >
                <span class="fa"></span>
                {item.name}
              </div>
              <ul className="sidebar-subnav">
                {item.sublist.map((item_) => (
                  <li>
                    <Link to={item_.link} className="link">
                      {item_.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        } else {
          return (
            <li key={item.name + Math.random()}>
              <Link to="/accordion" className="link">
                {item.name}
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
};
