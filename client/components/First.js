import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header.js';
import Content from './Content.js';


class Main extends Component {

  constructor() {
    super();

   }

  render() {
    console.log(this) 
    const no = "love it"
    return (
      <div>
        <Header/>
        <Content {...this.props}/>
      </div>
    );
  }
}

export default Main;


