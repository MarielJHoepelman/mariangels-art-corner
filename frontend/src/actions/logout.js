import { getPayload } from "./util/getPayload";

export const logout = (pageName, method, body) => {
  const payload = getPayload(method, body);
  return (dispatch) => {
    dispatch({ type: "LOGGIN_OUT_USER" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        if (response.ok) {
          window.localStorage.removeItem("jwt_token");
          dispatch({ type: "USER_LOGGED_OUT", user: {} });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
