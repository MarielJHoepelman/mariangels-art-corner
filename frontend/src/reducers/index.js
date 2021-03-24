export default function reducers(state = { data: {}, loading: false }, action) {
  switch (action.type) {
    case "LOADING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "DATA_LOADED":
      console.log(action);
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    default:
      return state;
  }
}
