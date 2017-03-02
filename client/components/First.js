import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header.js';
import Content from './Content.js';


class Main extends Component {

  constructor() {
    super();

   }

  render() {
    const no = "love it"
    return (
      <div>
        <Header/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;


