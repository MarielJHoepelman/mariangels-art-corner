import { getPayload } from "./util/getPayload";

export const submitOrder = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    return fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        return responseJSON;
      })
      .catch((e) => {});
  };
};
