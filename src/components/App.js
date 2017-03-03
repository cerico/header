import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators.js';

import Header from './Header.js';
import Content from './Content.js';
import First from './First.js';
import css from './App.css';



function mapStateToProps(state){
	console.log(state)
	return {
		posts: state.posts,
		comments: state.comments,
		events: state.events,
		event: state.event,
		underline: state.underline,
		skills:state.skills
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(First);

export default App;