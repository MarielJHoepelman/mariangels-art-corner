import Home from "./Home";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const link = {
    display: "block",
  };

  return (
    <div className="navbar">
      <NavLink to="/" style={link}>
        Home
      </NavLink>
      <NavLink to="/about" style={link}>
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
