import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background: #ff627e;
  border: 1px solid #f4a8a8;
  color: #fff;
  font-size: 15px;
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
  text-decoration: none;
`;

export const Cart = ({
  shoppingCart,
  calculateSubtotal,
  removeProductFromShoppingCart,
}) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {shoppingCart.map((product) => (
          <div key={product.id}>
            <h3>
              {product.product_name}
              Qty: {product.qty} ${product.price}
              <button onClick={() => removeProductFromShoppingCart(product)}>
                Remove Item
              </button>
              Total: {product.qty * product.price}
            </h3>

            <img src={product.image.thumb} alt={product.id} />
          </div>
        ))}
      </div>
      <h1>Subtotal: ${calculateSubtotal}</h1>
      <StyledLink to="/checkout">CHECK OUT</StyledLink>
      <Link to="/shop">Continue Shopping</Link>
    </div>
  );
};
