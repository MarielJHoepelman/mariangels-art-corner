import React, { Component } from "react";
import { connect } from "react-redux";
import { fetcher } from "../actions/fetcher";
import { HeaderShoppingCart as HeaderShoppingCartComponent } from "../components/HeaderShoppingCart";

class HeaderShoppingCart extends Component {
  render() {
    return (
      <HeaderShoppingCartComponent shoppingCart={this.props.shopping_cart} />
    );
  }
}

const mapStateToProps = (state) => {
  return { shopping_cart: state.shopping_cart };
};

export default connect(mapStateToProps)(HeaderShoppingCart);
