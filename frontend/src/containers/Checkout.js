import React, { Component } from "react";
import { connect } from "react-redux";
import { Checkout as CheckoutComponent } from "../components/Checkout";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const InjectedCheckoutForm = ({ shoppingCart }) => (
  <ElementsConsumer>
    {({ stripe, elements }) => {
      return (
        stripe &&
        elements && (
          <CheckoutComponent
            stripe={stripe}
            elements={elements}
            shoppingCart={shoppingCart}
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
        <InjectedCheckoutForm shoppingCart={this.props.shoppingCart} />
      </Elements>
    );
  }
}

const mapStateToProps = (state) => {
  return { shoppingCart: state.shopping_cart };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
