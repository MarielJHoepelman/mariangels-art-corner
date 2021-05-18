import shopping_bag_icon from "../images/shopping_bag_icon.svg";
import { Link } from "react-router-dom";
import { ShoppingBagWrapper, QtyWrapper } from "../styles";

export const HeaderShoppingCart = ({ shoppingCart }) => {
  const productsTotalQty = shoppingCart.reduce((acc, current) => {
    return (acc += current.qty);
  }, 0);

  return (
    <ShoppingBagWrapper to="/cart">
      <img src={shopping_bag_icon} alt="shopping bag icon" />
      <QtyWrapper>{productsTotalQty}</QtyWrapper>
    </ShoppingBagWrapper>
  );
};
