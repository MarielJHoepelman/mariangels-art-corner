import { getPayload } from "./util/getPayload";

export const productsFetcher = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "LOADING_PRODUCTS" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "PRODUCTS_LOADED", products: responseJSON });
      })
      .catch((e) => {});
  };
};
