export default function ordersReducer(state = {}, action) {
  switch (action.type) {
    case "LOADING_ORDERS":
      return {
        ...state.orders,
        loading: true,
      };
    case "ORDERS_LOADED":
      return {
        data: [...action.orders],
        loading: false,
      };
    default:
      return state;
  }
}
