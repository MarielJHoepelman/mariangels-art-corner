import React, { Component } from "react";
import shopping_bag_icon from "../images/shopping_bag_icon.svg";
import { ShoppingBagWrapper, QtyWrapper } from "../styles";

export class HeaderShoppingCart extends Component {
  productsTotalQuantity = () =>
    this.props.shoppingCart.reduce((acc, current) => {
      return (acc += current.quantity);
    }, 0);

  render() {
    return (
      <ShoppingBagWrapper to="/cart">
        <img src={shopping_bag_icon} alt="shopping bag icon" />
        <QtyWrapper>{this.productsTotalQuantity()}</QtyWrapper>
      </ShoppingBagWrapper>
    );
  }
}
