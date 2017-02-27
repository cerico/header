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
      		<h2>Hello! Behaviouffr Basics is on your case <a href="./category/writing" className="writing-link">writes</a> and speaks about  <a href="./category/working" className="designer-link" title="portfolio">work</a> and life.</h2>
      	</div>
      </div>
    );
  }
}

export default Description;

