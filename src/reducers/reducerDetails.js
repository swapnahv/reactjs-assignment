import { __values } from "../../node_modules/tslib";

const initialState = {
  userDetails: {},
  productDetails: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      // Returnin only particular state object, will make other state object undefined in component
      // Example:
      // return {
      //   userDetails: action.payload
      // }; will set userDetails to some __values, but will set productDetails to undefined
      // you need to return something like this
      // {userDetails: action.payload, productDetails: state.productDetails}
      // The above converted into ES6 spread operation will be something like =>
      // return { ...state, productDetails: state.productDetails}

      return {
        ...state,
        userDetails: action.payload
      };
    case "GET_PRODUCT_DETAILS":
      return {
        ...state,
        productDetails: action.payload
      };
    default:
      return state;
  }
};
