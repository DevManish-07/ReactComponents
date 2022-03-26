import "./header.css";

const Header = () => {
  return (
    <header>
      <strong>
        <span className="main-title">React custom Components</span>
      </strong>
      <ul className="main-menu">
        <li>Home</li>
        <li>Docs</li>
        <li>Examples</li>
        <li>Icons</li>
        <li>Themes</li>
        <li>Blog</li>
      </ul>
    </header>
  );
};

export { Header };
