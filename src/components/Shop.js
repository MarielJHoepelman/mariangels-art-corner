import { ProductCardLink, ProductCardsContainer } from "../styles";

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
