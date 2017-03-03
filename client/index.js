import React from 'react';

import { render } from 'react-dom';

import App from './components/App.js';
import Main from './components/First.js';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Events from './components/Events.js';
import Single from './components/Single.js';
import Writing from './components/Writing.js';
import About from './components/About.js';
import Consulting from './components/Consulting.js';
import Fieldwork from './components/Fieldwork.js';
import Workshops from './components/Workshops.js';

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
	            <Route path="writing" component={Writing} ></Route>
	            <Route path="about" component={About} ></Route>
	            <Route path="consulting" component={Consulting} ></Route>
	            <Route path="workshops" component={Workshops} ></Route>
	            <Route path="fieldwork" component={Fieldwork} ></Route>
	            <Route path="/category/:linkId" component={Content} ></Route>
</Route>
 	    </Router>
	</Provider>
	)




render(router, document.getElementById('root'));