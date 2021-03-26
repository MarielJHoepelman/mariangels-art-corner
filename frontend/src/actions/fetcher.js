export const fetcher = (pageName, method, body) => {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_DATA" });
    fetch(`http://localhost:5000/contents/${pageName}`, payload)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        console.log(responseJSON);
        // return responseJSON;
        // debugger;
        dispatch({ type: "DATA_LOADED", data: responseJSON });
      })
      .catch((e) => {
        console.error(e);
      });
  };
};
