import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const submitOrder = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    return fetch(`${getBackendUrl()}{pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        return responseJSON;
      })
      .catch((e) => {});
  };
};
