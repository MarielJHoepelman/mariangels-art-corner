import React, { Component } from "react";
import { connect } from "react-redux";
import { submitOrder } from "../actions/submitOrder";
import { Checkout as CheckoutComponent } from "../components/Checkout";
import { account } from "../actions/account";

class Checkout extends Component {
  componentDidMount() {
    this.props.account().then((user) => {
      if (!user) {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return <CheckoutComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shopping_cart,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: (order) => dispatch(submitOrder("orders", "POST", order)),
    clearCart: () => dispatch({ type: "CLEAR_SHOPPING_CART" }),
    account: () => dispatch(account("account", "GET")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
