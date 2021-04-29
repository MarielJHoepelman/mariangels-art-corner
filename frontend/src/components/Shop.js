import styled from "styled-components";
import { Link } from "react-router-dom";

export const Shop = ({ data, loading }) => {
  return loading ? (
    <div> loading... </div>
  ) : (
    <div>
      {data.length > 0 &&
        data.map((product) => (
          <Link to={`/shop/${product.page_name}`} key={product.page_name}>
            <div>
              <img
                src={product.product_image.square}
                alt={product.product_name}
              />
              <div>{product.product_name}</div>
              <div>{product.price}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};
