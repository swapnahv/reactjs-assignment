/*export default function(){
	return({
		loggedIn:false
	})
}*/
const initialState = {
  userDetails: {}
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      console.log(action.type);
      console.log(action.payload);
      return {
        userDetails: action.payload
      };
    default:
      return state;
  }
};
