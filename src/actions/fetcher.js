import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const fetcher = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "LOADING_CONTENT" });
    fetch(`${getBackendUrl()}${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "CONTENT_LOADED", content: responseJSON });
      })
      .catch((e) => {});
  };
};
