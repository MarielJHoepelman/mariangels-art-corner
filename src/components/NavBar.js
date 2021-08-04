import { StyledNavBar, NavigationLink } from "../styles";

const NavBar = () => {
  return (
    <StyledNavBar>
      <div>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/art">Art</NavigationLink>
        <NavigationLink to="/about">About</NavigationLink>
        <NavigationLink to="/shop">Shop</NavigationLink>
        <NavigationLink to="/faq">FAQ</NavigationLink>
        <NavigationLink to="/contact-us">Contact Us</NavigationLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
