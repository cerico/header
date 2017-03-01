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
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default Main;


