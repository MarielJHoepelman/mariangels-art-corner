export default function shoppingCartReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PRODUCT_TO_SHOPPING_CART":
      const product = state.find((prod) => prod.id === action.product.id);
      if (product) {
        product.quantity += action.product.quantity;
        window.localStorage.setItem(
          "shopping_cart",
          JSON.stringify([...state])
        );
        return [...state];
      } else {
        window.localStorage.setItem(
          "shopping_cart",
          JSON.stringify([...state, action.product])
        );
        return [...state, action.product];
      }

    case "REMOVE_PRODUCT_FROM_SHOPPING_CART":
      const products = state.filter(
        (product) => product.id !== action.product.id
      );
      window.localStorage.setItem(
        "shopping_cart",
        JSON.stringify([...products])
      );
      return [...products];

    case "FETCH_SHOPPING_CART":
      const shoppingCartFromLocalStorage = window.localStorage.getItem(
        "shopping_cart"
      );
      return JSON.parse(shoppingCartFromLocalStorage) || [];
    case "CLEAR_SHOPPING_CART":
      window.localStorage.removeItem("shopping_cart");
      return [];
    default:
      return state;
  }
}
