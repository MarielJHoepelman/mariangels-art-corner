import { getPayload } from "./util/getPayload";

export const fetcher = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "LOADING_CONTENT" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        // return responseJSON;
        // debugger;
        dispatch({ type: "CONTENT_LOADED", content: responseJSON });
      })
      .catch((e) => {});
  };
};
