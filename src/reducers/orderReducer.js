export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case "LOADING_ORDER":
      return {
        ...state.order,
        loading: true,
      };
    case "ORDER_LOADED":
      return {
        ...action.order,
        loading: false,
      };
    default:
      return state;
  }
}
