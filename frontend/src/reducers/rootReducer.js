import { combineReducers } from "redux";
import contentsReducer from "./contentsReducer";
import productsReducer from "./productsReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
  content: contentsReducer,
  products: productsReducer,
  shopping_cart: shoppingCartReducer,
});

export default rootReducer;
