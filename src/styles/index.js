import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const COLORS = {
  pink: "#ff627e",
  blue: "#41d5fa",
};

export const BodyContainer = styled.div`
  margin-bottom: 100px;
  font-family: Montserrat;
`;

// ABOUT
export const Bio = styled.div`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  line-height: 30px;
`;

// FOOTER
export const StickyFooter = styled.footer`
  padding: 5px 0px;
  background: linear-gradient(to right, ${COLORS.pink}, ${COLORS.blue});
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Montserrat;
`;

export const Copyright = styled.p`
  padding-left: 20px;
`;

export const InstagramLogo = styled.a`
  padding-right: 20px;
  img {
    height: 50px;
    width: 50px;
  }
`;

// ART

export const TopDiv = styled.div`
  padding-right: 100px;
`;

export const ImageContainer = styled.div`
  padding-right: 100px;
`;

export const TopDivWrapper = styled.div`
  background: ${COLORS.pink};
  height: 500px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ArtCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1450px;
  margin: 0 auto;
`;

export const ArtSearch = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 20px auto;
`;

// ARTCARD

export const ArtCardLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #ff627e;
  font-weight: bold;
  :hover {
    color: #41d5fa;
  }
`;

// CART

export const StyledLink = styled(Link)`
  background: #ff627e;
  border: 1px solid #f4a8a8;
  color: #fff;
  font-size: 15px;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  text-decoration: none;
`;

export const CartHeaderWrapper = styled.h1`
  text-align: center;
  padding-bottom: 30px;
  font-family: Montserrat;
`;

export const ColumnNameWrapper = styled.div`
  display: flex;
  margin: 0 20px;
  padding-bottom: 20px;
  font-size: large;
`;

export const ProductColumn = styled.div`
  width: 55%;
`;

export const CartColumn = styled.div`
  width: 15%;
  text-align: right;
`;

export const PriceTitle = styled(CartColumn)``;

export const ProductNameAndImage = styled.div`
  width: 55%;
  display: flex;
`;

export const SubtotalWrapper = styled.div`
  text-align: right;
  margin-right: 20px;
`;

export const RedirectToPath = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #ff627e;
  font-size: large;
`;

export const CartContainer = styled.div`
  margin: 0 auto;
  width: 80%;
`;

// CHECKOUT

export const CheckoutContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;
export const CheckoutForm = styled.div`
  width: 50%;
`;
export const CheckoutCart = styled.div`
  width: 50%;
`;

//CONTACTUS

export const SectionHeader = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledForm = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 420px;
  max-width: 100%;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.4em;
  margin-bottom: 8px;
  margin-top: 8px;
`;

export const StyledInput = styled.input`
  font-size: 18px;
  line-height: 18px;
  background: #fff;
  color: #000;
  border: 1px solid #d9d9d9;
  padding: 0.8em 15px;
  margin: 0;
  vertical-align: middle;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  ::placeholder {
    font-family: Montserrat;
  }
`;

export const StyledTextArea = styled.textarea`
  line-height: 18px;
  height: 120px;
  color: #000;
  border: 1px solid #d9d9d9;
  padding: 0.8em 15px;
  margin: 0;
  vertical-align: middle;
  width: 100%;
  border-radius: 0;
  box-sizing: border-box;
`;

export const StyledButton = styled.button`
  background: #ff627e;
  border: 1px solid #f4a8a8;
  color: #fff;
  font-size: 15px;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  font-weight: light;
`;

//FAQ

export const FaqStyled = styled.div`
  text-align: center;
`;

//HEADER

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  position: relative;
`;

//HEADER SHOPPING CART (shopping bag icon)

export const ShoppingBagWrapper = styled(Link)`
  margin-left: auto;
  padding-right: 20px;
  position: relative;
`;

export const HeaderAccountLink = styled.div`
  margin-left: auto;
  padding-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
`;

export const QtyWrapper = styled.div`
  position: absolute;
  width: 50px;
  top: 20px;
  text-align: center;
  color: #ff627e;
`;

// HOME
export const HomeHeader = styled.div`
  padding-right: 100px;
`;

export const HomeHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const HomeHeaderContainer = styled.div`
  padding: 30px 0;
  margin-bottom: 30px;
  background: rgb(255 100 126 / 8%);
  width: 100%;
`;

export const HomeArtCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const HomeLinkWrapper = styled.div`
  text-align: center;
`;

//NAVBAR

export const StyledNavBar = styled.nav`
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

export const NavigationLink = styled(NavLink)`
  padding: 15px 20px;
  margin: 0px 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:hover {
    color: #ff627e;
  }
`;

//PRODUCT

export const StyledAddButton = styled.button`
  background: #ffc5c0;
  color: #fff;
  font-size: 15px;
  border: 1px solid #ffc5c0;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  font-weight: bold;
  &:hover {
    background: #ff627e;
  }
`;

export const StyledShopButton = styled.button`
  font-family: Montserrat;
  font-size: 30px;
  color: black;
  border: 1px solid black;
  height: 52px;
  width: 52px;
  margin: 0 5px;
  background-color: #fff;
  cursor: pointer;
  font-weight: lighter;
  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

export const ButtonsWrapper = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const QuantityButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledQtyDiv = styled.div`
  font-size: 30px;
  color: black;
  background-color: #fff;
  font-weight: bold;
  height: 0;
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  border: 1px solid black;
`;

export const ProductContainer = styled.div`
  display: flex;
`;

export const ProductInfo = styled.div``;

export const ProductInfoWrapper = styled.div`
  margin-left: 50px;
`;

//SHOP

export const ProductCardLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #ff627e;
  font-weight: bold;
  :hover {
    color: #41d5fa;
  }
`;

export const ProductCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1450px;
  margin: 0 auto;
`;

//SingleArt

export const ArtWrapper = styled.div`
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  line-height: 30px;
`;

//Account

export const OrderWrapper = styled.div`
  display: flex;
  > div {
    width: 25%;
  }
`;

export const OrderColumn = styled.h3`
  width: 25%;
`;

export const OrderHistoryContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
`;
export const OrderHeaderWrapper = styled.div`
  display: flex;
`;
export const SingleOrderContainer = styled.div``;
