import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index.js';

import events from './data/events.js';
import skills from './data/skills.js';
import notes from './data/notes.js';
import talks from './data/talks.js';
import about from './data/about.js';
import contact from './data/contact.js';

console.log(rootReducer)

const defaultState = {
	events,
	skills,
	event,
	notes,
	talks,
	about,
	contact
};

console.log(defaultState)
const store = createStore(rootReducer, defaultState);
console.log(16)
console.log(store)

export const history = syncHistoryWithStore(browserHistory, store)

export default store;
