import Home from "./Home";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
  const link = {
    display: "block",
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
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
