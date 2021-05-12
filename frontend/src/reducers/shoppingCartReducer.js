export default function shoppingCartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_SHOPPING_CART":
      const product = state.find((prod) => prod.id === action.product.id);

      if (product) {
        product.qty += action.product.qty;
        return [...state];
      } else {
        return [...state, action.product];
      }
    case "REMOVE_PRODUCT_FROM_SHOPPING_CART":
      const products = state.filter(
        (product) => product.id !== action.product.id
      );
      return products;
    default:
      return state;
  }
}
