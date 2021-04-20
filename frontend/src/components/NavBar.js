import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background: linear-gradient(to right, #ff627e, #41d5fa);
  padding: 1px 0px;
  > div {
    background: white;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 10px 20px;
  margin: 0px 5px;
`;

const NavBar = () => {
  const link = {
    display: "block",
  };

  return (
    <StyledNavBar>
      <div>
        <StyledLink to="/" style={link}>
          Home
        </StyledLink>
        <StyledLink to="/about" style={link}>
          About
        </StyledLink>
        <StyledLink to="/contact-us" style={link}>
          Contact Us
        </StyledLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
