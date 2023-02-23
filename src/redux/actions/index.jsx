import FakeApiStore from "../../components/Api/FakeApiStore";
import { ActionTypes } from "../actions-type";

export const fetchProducts = () => {
  return async function (dispatch, getState) {
    const response = await FakeApiStore.get("/products");
    console.log(response.data);
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
  };

  // return {
  //   type: ActionTypes.FETCH_PRODUCTS,
  //   payload: response,
  // };
};
export const fetchOneProduct = (id) => {
  return async (dispatch) => {
    const response = await FakeApiStore.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCTS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
