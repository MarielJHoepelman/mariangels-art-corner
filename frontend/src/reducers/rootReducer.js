import { combineReducers } from "redux";
import contentsReducer from "./contentsReducer";
import productsReducer from "./productsReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import userReducer from "./userReducer";
import ordersReducer from "./ordersReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  content: contentsReducer,
  products: productsReducer,
  product: productReducer,
  shopping_cart: shoppingCartReducer,
  user: userReducer,
  orders: ordersReducer,
  order: orderReducer,
});

export default rootReducer;
