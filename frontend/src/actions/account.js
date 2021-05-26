import { getPayload } from "./util/getPayload";

export const account = (pageName, method, body) => {
  const payload = getPayload(method, body);
  return (dispatch) => {
    dispatch({ type: "LOADING_USER_ACCOUNT" });
    return fetch(`http://localhost:5000/${pageName}`, payload)
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
