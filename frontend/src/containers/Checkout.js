import React, { Component } from "react";
import { connect } from "react-redux";
import { submitOrder } from "../actions/submitOrder";
import { Checkout as CheckoutComponent } from "../components/Checkout";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const InjectedCheckoutForm = ({ shoppingCart, submitOrder }) => (
  <ElementsConsumer>
    {({ stripe, elements }) => {
      return (
        stripe &&
        elements && (
          <CheckoutComponent
            stripe={stripe}
            elements={elements}
            shoppingCart={shoppingCart}
            submitOrder={submitOrder}
          />
        )
      );
    }}
  </ElementsConsumer>
);

class Checkout extends Component {
  render() {
    return (
      <Elements stripe={stripePromise}>
        <InjectedCheckoutForm
          shoppingCart={this.props.shoppingCart}
          submitOrder={this.props.submitOrder}
        />
      </Elements>
    );
  }
}

const mapStateToProps = (state) => {
  return { shoppingCart: state.shopping_cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitOrder: (order) => dispatch(submitOrder("orders", "POST", order)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
