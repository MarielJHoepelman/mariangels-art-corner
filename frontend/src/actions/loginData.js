import { getPayload } from "./util/getPayload";

export const loginData = (pageName, method, body) => {
  const payload = getPayload(method, body);
  return (dispatch) => {
    dispatch({ type: "LOGGIN_IN_USER" });
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
        dispatch({ type: "USER_LOGGED_IN", user: responseJSON });
      })
      .catch((e) => {});
  };
};
