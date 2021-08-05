import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const ordersFetcher = (pageName, method) => {
  const payload = getPayload(method);

  return (dispatch) => {
    dispatch({ type: "LOADING_ORDERS" });
    fetch(`${getBackendUrl()}${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "ORDERS_LOADED", orders: responseJSON });
      })
      .catch((e) => {});
  };
};
