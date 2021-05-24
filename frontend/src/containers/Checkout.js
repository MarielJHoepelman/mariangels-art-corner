import React, { Component } from "react";
import { connect } from "react-redux";
import { submitOrder } from "../actions/submitOrder";
import { Checkout } from "../components/Checkout";
import { account } from "../actions/account";

const mapStateToProps = (state) => {
  return {
    shoppingCart: state.shopping_cart,
    user: state.user,
    order: state.order,
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
