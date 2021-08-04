import { getPayload } from "./util/getPayload";

export const ordersFetcher = (pageName, method) => {
  const payload = getPayload(method);

  return (dispatch) => {
    dispatch({ type: "LOADING_ORDERS" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ORDERS_LOADED", orders: responseJSON });
      })
      .catch((e) => {});
  };
};
