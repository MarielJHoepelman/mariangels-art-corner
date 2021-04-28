import styled from "styled-components";
import instagram from "../images/instagram.png";

const StickyFooter = styled.footer`
  padding: 10px 0px;
  background: linear-gradient(to right, #ff627e, #41d5fa);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Copyright = styled.p`
  padding-left: 20px;
  font-family: Montserrat;
`;

const InstagramLogo = styled.a`
  padding-right: 20px;
  img {
    height: 50px;
    width: 50px;
  }
`;

const Footer = () => {
  return (
    <StickyFooter>
      <Copyright>2021 Copyright: created by Mariel Hoepelman</Copyright>
      <InstagramLogo
        href="https://www.instagram.com/angelswirlette/"
        target="blank"
      >
        <img src={instagram} alt="Instagram Logo Gradient" />
      </InstagramLogo>
    </StickyFooter>
  );
};

export default Footer;
