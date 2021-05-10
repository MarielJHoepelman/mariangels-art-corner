import styled from "styled-components";

export const HeaderShoppingCart = ({ shoppingCart }) => {
  const productsTotalQty = shoppingCart.reduce((acc, current) => {
    return (acc += current.qty);
  }, 0);

  return <div>{productsTotalQty}</div>;
};
