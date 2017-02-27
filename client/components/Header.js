import React, { Component } from 'react';

class Header extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="App">
       header
      </div>
    );
  }
}

export default Header;

