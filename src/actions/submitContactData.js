import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const submitContactData = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "SUBMITTING_CONTACT" });
    fetch(`${getBackendUrl()}${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "CONTACT_SUBMITTED", contact: responseJSON });
      })
      .catch((e) => {});
  };
};
