export const fetcher = () => {
  const payload = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    // mode: "no-cors",
    // body: body ? JSON.stringify(body) : null,
    body: null,
  };

  return (dispatch) => {
    dispatch({ type: "LOADING_DATA" });
    fetch(`http://localhost:5000/contents/about`, payload)
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
        debugger;
        console.error(e);
      });
  };
};
