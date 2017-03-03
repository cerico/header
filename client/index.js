import React from 'react';

import { render } from 'react-dom';

import App from './components/App.js';
import Main from './components/First.js';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Events from './components/Events.js';
import Single from './components/Single.js';
import Work from './components/Work.js';
import About from './components/About.js';
import Notes from './components/Notes.js';
import Contact from './components/Contact.js';
import Talks from './components/Talks.js';

console.log(Content)


import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store.js'

console.log(store)
console.log(App)
console.log(Provider)
const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/" component={App}>
	            <IndexRoute component={Content}></IndexRoute>
	            <Route path="events" component={Events} ></Route>
	            <Route path="work" component={Work} ></Route>
	            <Route path="about" component={About} ></Route>
	            <Route path="notes" component={Notes} ></Route>
	            <Route path="talks" component={Talks} ></Route>
	            <Route path="contact" component={Contact} ></Route>
	            <Route path="/category/:linkId" component={Content} ></Route>
</Route>
 	    </Router>
	</Provider>
	)




render(router, document.getElementById('root'));