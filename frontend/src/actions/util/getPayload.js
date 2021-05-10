export const getPayload = (method, body) => ({
  method: method,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: body ? JSON.stringify(body) : null,
});
