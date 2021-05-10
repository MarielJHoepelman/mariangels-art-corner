import { getPayload } from "./util/getPayload";

export const submitContactData = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "SUBMITTING_CONTACT" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "CONTACT_SUBMITTED", products: responseJSON });
      })
      .catch((e) => {});
  };
};
