import { combineReducers } from "redux";
import { ProductReducer, selectProductReducer } from "./ProductReducer";
export const reducers = combineReducers({
  allproducts: ProductReducer,
  product: selectProductReducer,
});
