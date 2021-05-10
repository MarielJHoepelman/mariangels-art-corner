import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background: #ffc5c0;
  color: #fff;
  font-size: 15px;
  border: 1px solid #ffc5c0;
  line-height: 1em;
  height: auto;
  margin: 0;
  cursor: pointer;
  padding: 1.2em 25px 1.2em;
  vertical-align: middle;
  text-align: center;
  border-radius: 5px;
  display: inline-block;
  letter-spacing: 0.08em;
  margin-top: 8px;
  font-weight: bold;
  font-family: Montserrat;
  &:hover {
    background: #ff627e;
  }
`;

const StyledShopButton = styled.button`
  font-family: Montserrat;
  font-size: 30px;
  color: black;
  border: 1px solid black;
  height: 52px;
  width: 52px;
  margin: 0 5px;
  background-color: #fff;
  cursor: pointer;
  font-weight: lighter;
  &:hover {
    color: black;
    border: 1px solid black;
  }
`;

const ButtonsWrapper = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const QuantityButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledDiv = styled.div`
  font-size: 30px;
  color: black;
  background-color: #fff;
  font-weight: bold;
  height: 0;
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  border: 1px solid black;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const ProductInfo = styled.div`
  font-family: Montserrat;
`;
const ProductInfoWrapper = styled.div`
  margin-left: 50px;
`;

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
      product_name: this.props.products.product_name,
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
              <StyledDiv>{this.state.quantity}</StyledDiv>
              <StyledShopButton onClick={this.handleClick} name="add">
                +
              </StyledShopButton>
            </QuantityButtons>
            <StyledButton onClick={this.handleAddToCart}>
              ADD TO CART
            </StyledButton>
          </ButtonsWrapper>
        </ProductInfoWrapper>
      </ProductContainer>
    );
  }
}
