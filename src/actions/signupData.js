import { getPayload } from "./util/getPayload";

export const signupData = (pageName, method, body) => {
  const payload = getPayload(method, body);

  return (dispatch) => {
    dispatch({ type: "SIGNING_UP_USER" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        if (response.headers.get("Authorization")) {
          window.localStorage.setItem(
            "jwt_token",
            response.headers.get("Authorization")
          );
        }
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "USER_SIGNED_UP", user: responseJSON });
      })
      .catch((e) => {});
  };
};
