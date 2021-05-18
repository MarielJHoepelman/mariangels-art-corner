import instagram from "../images/instagram.png";
import { StickyFooter, Copyright, InstagramLogo } from "../styles";

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
