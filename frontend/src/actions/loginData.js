import { getPayload } from "./util/getPayload";

export const loginData = (pageName, method, body) => {
  const payload = getPayload(method, body);
  console.log(payload);
  return (dispatch) => {
    dispatch({ type: "SUBMITTING_CONTACT" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((responseJSON) => {
        console.log(responseJSON);
        dispatch({ type: "CONTACT_SUBMITTED", products: responseJSON });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
