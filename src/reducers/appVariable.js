const initialState = {
  loggedIn: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING":
      return {
        loggedIn: action.payload
      };
    default:
      return state;
  }
};
