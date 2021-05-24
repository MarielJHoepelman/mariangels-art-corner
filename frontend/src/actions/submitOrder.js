import { getPayload } from "./util/getPayload";

export const submitOrder = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "LOADING_SUBMIT_ORDER" });
    return fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ORDER_SUBMITTED", order: responseJSON });
        return responseJSON;
      })
      .catch((e) => {});
  };
};
