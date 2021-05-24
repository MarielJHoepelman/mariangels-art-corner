import React, { Component } from "react";
import {
  CheckoutContainer,
  CheckoutForm,
  CheckoutCart,
  StyledButton,
} from "../styles";

export class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.account();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const order = {
      order: {
        user_id: this.props.user.id,
        total: this.total(),
        order_items: this.props.shoppingCart.map((item) => {
          return {
            product_id: item.id,
            price: item.price,
            quantity: item.quantity,
          };
        }),
      },
    };
    this.props.submitOrder(order).then((result) => {
      this.props.clearCart();
      this.props.history.push({
        pathname: "/order-submitted",
        state: { order: result },
      });
    });
  };

  total = () => {
    return this.props.shoppingCart.reduce((acc, product) => {
      return (acc += product.quantity * product.price);
    }, 0);
  };

  render() {
    return (
      <CheckoutContainer>
        <CheckoutForm>
          {this.props.user && (
            <div>
              <div>First Name: {this.props.user.name}</div>
              <div>Last Name: {this.props.user.last_name}</div>
              <div>Email: {this.props.user.email}</div>
            </div>
          )}
          <form onSubmit={this.handleSubmit}>
            <StyledButton type="submit">Submit Order</StyledButton>
          </form>
        </CheckoutForm>
        <CheckoutCart>
          {this.props.shoppingCart &&
            this.props.shoppingCart.map((product) => (
              <div key={product.id}>
                <h3>
                  {product.product_name}
                  Qty: {product.quantity} ${product.price}
                  Total: {product.quantity * product.price}
                </h3>

                <img src={product.image.thumb} alt={product.id} />
              </div>
            ))}
        </CheckoutCart>
      </CheckoutContainer>
    );
  }
}
