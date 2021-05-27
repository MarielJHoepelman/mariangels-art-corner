export default function productReducer(state = { loading: true }, action) {
  switch (action.type) {
    case "LOADING_PRODUCT":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCT_LOADED":
      return { ...action.product, loading: false };
    default:
      return state;
  }
}
