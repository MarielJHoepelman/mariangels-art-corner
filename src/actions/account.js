import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const account = (pageName, method, body) => {
  const payload = getPayload(method, body);
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_ACCOUNT" });
    return fetch(`${getBackendUrl()}${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "USER_ACCOUNT_LOADED", user: responseJSON });
        return responseJSON;
      })
      .catch((e) => {});
  };
};
