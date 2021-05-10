import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import HeaderShoppingCart from "../containers/HeaderShoppingCart";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
    <HeaderShoppingCart />
  </HeaderWrapper>
);

export default Header;
