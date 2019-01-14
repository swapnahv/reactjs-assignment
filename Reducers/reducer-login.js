export default (state, action) => {
  switch (action.type) {
    case "LOGGING":
      return {
        loggedIn: action.payload
      };
    default:
      return state;
  }
};