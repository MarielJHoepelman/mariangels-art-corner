import logo from "../images/logo.png";
import {
  HeaderWrapper,
  LogoLink,
  RedirectToPath,
  HeaderAccountLink,
} from "../styles";
import HeaderShoppingCart from "../containers/HeaderShoppingCart";

const Header = () => (
  <HeaderWrapper>
    <LogoLink to="/">
      <img src={logo} alt="logo" />
    </LogoLink>
    <HeaderAccountLink>
      <RedirectToPath to="/account">Account</RedirectToPath>
      <HeaderShoppingCart />
    </HeaderAccountLink>
  </HeaderWrapper>
);

export default Header;
