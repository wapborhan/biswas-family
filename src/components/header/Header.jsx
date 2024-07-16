import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      Header
      <br />
      <br />
      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Header;
