import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background: linear-gradient(to right, #ff627e, #41d5fa);
  padding: 1px 0px;
  margin-bottom: 20px;
  > div {
    background: white;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
  }
`;

const StyledLink = styled(NavLink)`
  padding: 15px 20px;
  margin: 0px 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: Montserrat;
  &:hover {
    color: #ff627e;
  }
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/art">Art</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <StyledLink to="/contact-us">Contact Us</StyledLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
