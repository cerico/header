import React, { Component } from 'react';


class Description extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="site-description">
      <h1 className="site-title">BeBa</h1>
      	<div className="tagline">
      		<h2>Design Develop & Code</h2>
      	</div>
      </div>
    );
  }
}

export default Description;

