import React, { Component } from "react";
import { connect } from "react-redux";
import { Cart as CartComponent } from "../components/Cart";

class Cart extends Component {
  calculateSubtotal = () => {
    return this.props.shopping_cart.reduce((acc, product) => {
      return (acc += product.qty * product.price);
    }, 0);
  };

  render() {
    return (
      <div>
        <CartComponent
          shoppingCart={this.props.shopping_cart}
          calculateSubtotal={this.calculateSubtotal()}
          removeProductFromShoppingCart={
            this.props.removeProductFromShoppingCart
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { shopping_cart: state.shopping_cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromShoppingCart: (product) => {
      dispatch({ type: "REMOVE_PRODUCT_FROM_SHOPPING_CART", product });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
