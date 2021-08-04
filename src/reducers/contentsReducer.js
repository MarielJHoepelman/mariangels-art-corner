export default function contentsReducers(state = { loading: true }, action) {
  switch (action.type) {
    case "LOADING_CONTENT":
      return {
        ...state,
        loading: true,
      };
    case "CONTENT_LOADED":
      return {
        ...action.content,
        loading: false,
      };
    default:
      return state;
  }
}
