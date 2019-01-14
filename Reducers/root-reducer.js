import {combineReducers} from 'redux';
import appVariables from './appVariable.js';

const allReducers = combineReducers({
	appVariables:appVariables
})

export default allReducers;