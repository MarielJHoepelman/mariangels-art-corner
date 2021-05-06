export default function productsReducer(state = { data: {} }, action) {
  switch (action.type) {
    case "LOADING_PRODUCTS":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCTS_LOADED":
      return { data: action.products, loading: false };
    default:
      return state;
  }
}
