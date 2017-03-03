import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import event from './event';
import underline from './underline';
import skills from './skills';

const rootReducer = combineReducers({
	events,
	event,
	underline,
	skills,
	routing :routerReducer
});

export default rootReducer;