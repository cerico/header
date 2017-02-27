import React, { Component } from 'react';

class Main extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="App">
        hello main
      </div>
    );
  }
}

export default Main;
