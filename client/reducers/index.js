import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import event from './event';
import underline from './underline';
import skills from './skills';
import talks from './talks';
import notes from './notes';
import about from './about';
import contact from './contact';

const rootReducer = combineReducers({
	events,
	event,
	underline,
	skills,
	talks,
	notes,
	about,
	contact,
	routing :routerReducer
});

export default rootReducer;