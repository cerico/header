import React, { Component } from 'react';


class Description extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="site-description">
       Description
      </div>
    );
  }
}

export default Description;

