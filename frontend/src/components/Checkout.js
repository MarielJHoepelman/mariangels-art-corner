import React, { Component } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import styled from "styled-components";
import { Link } from "react-router-dom";

export class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!this.props.stripe}>
              Pay
            </button>
          </form>
        </div>
        <div>
          <div>
            {/* this.props.shoppingCart.map((product) => (
              <div key={product.id}>
                <h3>
                  {product.product_name}
                  Qty: {product.qty} ${product.price}
                  Total: {product.qty * product.price}
                </h3>

                <img src={product.image.thumb} alt={product.id} />
              </div>
            )) */}
          </div>
        </div>
      </div>
    );
  }
}
