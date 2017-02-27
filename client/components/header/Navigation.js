import React, { Component } from 'react';


class Navigation extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <nav className="main-navigation">
       Navigation
      </nav>
    );
  }
}

export default Navigation;

