import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductCardLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-family: Montserrat;
  color: #ff627e;
  font-weight: bold;
  :hover {
    color: #41d5fa;
  }
`;

export const ProductCardsContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 1450px;
  margin: 0 auto;
`;

export const Shop = ({ products, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <ProductCardsContainer>
      {products.length > 0 &&
        products.map((product) => (
          <ProductCardLink
            to={`/shop/${product.page_name}`}
            key={product.page_name}
          >
            <div>
              <img
                src={product.product_image.square}
                alt={product.product_name}
              />
              <div>{product.product_name}</div>
              <div>${product.price}</div>
            </div>
          </ProductCardLink>
        ))}
    </ProductCardsContainer>
  );
};
