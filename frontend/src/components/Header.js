import styled from "styled-components";
import logo from "../images/logo.png";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
`;

const Header = () => (
  <HeaderWrapper>
    <img src={logo} alt="logo" />
  </HeaderWrapper>
);

export default Header;
