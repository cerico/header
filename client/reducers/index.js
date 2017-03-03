import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import event from './event';
import underline from './underline';

const rootReducer = combineReducers({
	events,
	event,
	underline,
	routing :routerReducer
});

export default rootReducer;