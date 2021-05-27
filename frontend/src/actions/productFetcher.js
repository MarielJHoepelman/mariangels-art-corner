import { getPayload } from "./util/getPayload";

export const productFetcher = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "LOADING_PRODUCT" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "PRODUCT_LOADED", product: responseJSON });
      })
      .catch((e) => {});
  };
};
