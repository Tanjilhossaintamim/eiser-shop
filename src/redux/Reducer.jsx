import * as actionTypes from "./ActionTypes";
const initialState = {
  featureProduct: [],
  singel_product: null,
  product_is_loading: false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_FEATURE_PRODUCT:
      return {
        ...state,
        featureProduct: action.payload,
      };
    case actionTypes.VIEW_SINGLE_PRODUCT:
      return {
        ...state,
        singel_product: action.payload,
      };
    case actionTypes.PRODUCT_IS_LOADING:
      return {
        ...state,
        product_is_loading: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
