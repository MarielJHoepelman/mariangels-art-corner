import logo from "../images/logo.png";
import { HeaderWrapper, LogoLink } from "../styles";
import HeaderShoppingCart from "../containers/HeaderShoppingCart";

const Header = () => (
  <HeaderWrapper>
    <LogoLink to="/">
      <img src={logo} alt="logo" />
    </LogoLink>
    <HeaderShoppingCart />
  </HeaderWrapper>
);

export default Header;
