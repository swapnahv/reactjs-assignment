import {combineReducers} from 'redux';
import appVariables from './appVariable.js';
import details from './reducer-details';

const allReducers = combineReducers({
	appVariables:appVariables,
	details: details
})

export default allReducers;
