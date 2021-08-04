import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderShoppingCart as HeaderShoppingCartComponent } from "../components/HeaderShoppingCart";

class HeaderShoppingCart extends Component {
  componentDidMount() {
    this.props.cartFetcher();
  }

  render() {
    return (
      <HeaderShoppingCartComponent
        shoppingCart={this.props.shopping_cart}
        cartFetcher={this.props.cartFetcher}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { shopping_cart: state.shopping_cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartFetcher: () => dispatch({ type: "FETCH_SHOPPING_CART" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderShoppingCart);
