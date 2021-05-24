export default function orderReducer(state = {}, action) {
  switch (action.type) {
    case "LOADING_SUBMIT_ORDER":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_SUBMITTED":
      return {
        ...action.order,
        loading: false,
      };
    default:
      return state;
  }
}
