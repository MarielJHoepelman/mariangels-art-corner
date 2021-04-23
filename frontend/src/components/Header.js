import styled from "styled-components";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

const Header = () => (
  <Link to="/">
    <HeaderWrapper>
      <img src={logo} alt="logo" />
    </HeaderWrapper>
  </Link>
);

export default Header;
