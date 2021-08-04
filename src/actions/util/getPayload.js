export const getPayload = (method, body) => {
  const jwt_token = localStorage.getItem("jwt_token");

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: jwt_token,
    },
    body: body ? JSON.stringify(body) : null,
  };
};
