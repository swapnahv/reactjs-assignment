/*export default function(){
	return({
		loggedIn:false
	})
}*/
const initialState = {
  userDetails: {},
  productDetails: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      console.log(action.type);
      console.log(action.payload);
      return {
        userDetails: action.payload
      };
    case "GET_PRODUCT_DETAILS":
      console.log(action.type);
      console.log(action.payload);
      return {
        productDetails: action.payload
      };
    default:
      return state;
  }
};
