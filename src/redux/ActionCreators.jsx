import axios from "axios";
import * as actionTypes from "./ActionTypes";

const load_feature_product = (products) => {
  return {
    type: actionTypes.LOAD_FEATURE_PRODUCT,
    payload: products,
  };
};

export const load_singel_product = (product) => {
  return {
    type: actionTypes.VIEW_SINGLE_PRODUCT,
    payload: product,
  };
};

const product_loading = (loading) => {
  return {
    type: actionTypes.PRODUCT_IS_LOADING,
    payload: loading,
  };
};

export const fetch_singel_product = (productId) => (dispatch) => {
  // axios
  //   .get("https://api.escuelajs.co/api/v1/products/" + productId)
  //   .then((response) => {
  //     dispatch(load_singel_product(response.data));
  //   });
  console.log("action", productId);
};

export const fetch_feature_product = (limit) => (dispatch) => {
  dispatch(product_loading(true));
  axios
    .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=" + limit)
    .then((response) => {
      dispatch(product_loading(false));
      dispatch(load_feature_product(response.data));
    });
};
