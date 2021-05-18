import React, { Component } from "react";
import {
  StyledAddButton,
  StyledShopButton,
  ButtonsWrapper,
  QuantityButtons,
  StyledQtyDiv,
  ProductContainer,
  ProductInfo,
  ProductInfoWrapper,
  RedirectToPath,
} from "../styles";

export class Product extends Component {
  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      quantity: 1,
    };
  }

  handleClick = (event) => {
    if (this.state.quantity === 1 && event.target.name === "substract") return;
    this.setState({
      quantity:
        event.target.name === "add"
          ? (this.state.quantity += 1)
          : (this.state.quantity -= 1),
    });
  };

  handleAddToCart = () => {
    this.props.addProductToShoppingCart({
      id: this.props.products.id,
      image: this.props.products.product_image,
      product_name: this.props.products.product_name,
      price: this.props.products.price,
      qty: this.state.quantity,
    });
  };

  render() {
    return this.props.loading ? (
      <div> loading... </div>
    ) : (
      <ProductContainer>
        <div>
          {this.props.products?.product_image?.large && (
            <img
              src={this.props.products.product_image.large}
              alt={this.props.products.product_name}
            />
          )}
        </div>
        <ProductInfoWrapper>
          <ProductInfo>
            <h1>{this.props.products.product_name}</h1>
            <h3>${this.props.products.price}</h3>
            <h3
              dangerouslySetInnerHTML={{
                __html: this.props.products.description,
              }}
            />
          </ProductInfo>

          <ButtonsWrapper>
            <h3>Quantity</h3>
            <QuantityButtons>
              <StyledShopButton onClick={this.handleClick} name="substract">
                -
              </StyledShopButton>
              <StyledQtyDiv>{this.state.quantity}</StyledQtyDiv>
              <StyledShopButton onClick={this.handleClick} name="add">
                +
              </StyledShopButton>
            </QuantityButtons>
            <StyledAddButton onClick={this.handleAddToCart}>
              ADD TO CART
            </StyledAddButton>
          </ButtonsWrapper>
        </ProductInfoWrapper>
      </ProductContainer>
    );
  }
}
