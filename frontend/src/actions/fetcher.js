export const fetcher = (pageName, method, body) => {
  console.log("in fetcher", body);
  const payload = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_DATA" });
    fetch(`http://localhost:5000/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        console.log("in fetcher", responseJSON);
        // return responseJSON;
        // debugger;
        dispatch({ type: "DATA_LOADED", data: responseJSON });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
