import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const singleOrderFetcher = (pageName, method) => {
  const payload = getPayload(method);

  return (dispatch) => {
    dispatch({ type: "LOADING_ORDER" });
    return fetch(`${getBackendUrl()}${pageName}`, payload)
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
