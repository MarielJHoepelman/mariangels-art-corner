import { getPayload } from "./util/getPayload";

export const singleOrderFetcher = (pageName, method) => {
  const payload = getPayload(method);

  return (dispatch) => {
    dispatch({ type: "LOADING_ORDER" });
    return fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ORDER_LOADED", order: responseJSON });
        return responseJSON;
      })
      .catch((e) => {});
  };
};
