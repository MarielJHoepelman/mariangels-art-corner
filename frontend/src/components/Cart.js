import {
  StyledLink,
  CartHeaderWrapper,
  ColumnNameWrapper,
  ProductColumn,
  CartColumn,
  PriceTitle,
  ProductNameAndImage,
  SubtotalWrapper,
  RedirectToPath,
  CartContainer,
} from "../styles";

export const Cart = ({
  shoppingCart,
  calculateSubtotal,
  removeProductFromShoppingCart,
}) => {
  return (
    <div>
      <CartHeaderWrapper>Shopping Cart</CartHeaderWrapper>
      <CartContainer>
        <ColumnNameWrapper>
          <ProductColumn>Product</ProductColumn>
          <CartColumn>Price</CartColumn>
          <CartColumn>Quantity</CartColumn>
          <CartColumn>Total</CartColumn>
        </ColumnNameWrapper>
        <div>
          {shoppingCart.map((product) => (
            <ColumnNameWrapper key={product.id}>
              <ProductNameAndImage>
                <div>
                  <img src={product.image.thumb} alt={product.id} />
                </div>
                <div>
                  <h3>{product.product_name}</h3>
                </div>
              </ProductNameAndImage>
              <PriceTitle>
                <p> ${product.price} </p>
              </PriceTitle>
              <CartColumn>
                <p>
                  {product.qty}{" "}
                  <button
                    onClick={() => removeProductFromShoppingCart(product)}
                  >
                    X
                  </button>
                </p>
              </CartColumn>
              <CartColumn>
                <p>{product.qty * product.price}</p>
              </CartColumn>
            </ColumnNameWrapper>
          ))}
        </div>
        <SubtotalWrapper>
          <h2>Subtotal: ${calculateSubtotal}</h2>

          <StyledLink to="/checkout">CHECK OUT</StyledLink>
          <RedirectToPath to="/shop">Continue Shopping</RedirectToPath>
        </SubtotalWrapper>
      </CartContainer>
    </div>
  );
};
