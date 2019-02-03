import { combineReducers } from "redux";
import appVariables from "./appVariable.js";
import details from "./reducerDetails";

const allReducers = combineReducers({
  appVariables: appVariables,
  details: details
});

export default allReducers;
