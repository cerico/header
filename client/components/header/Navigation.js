import React, { Component } from 'react';


class Navigation extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <nav className="main-navigation">
       <ul>
       	<li className="writing-link ">
       		<a href="./category/writing">Writing</a>
       	</li>
       	<li className="notes-link ">
       		<a href="./category/speaking">Speaking</a>
       	</li>
       	<li className="talks-link ">
       		<a href="./category/working">Work</a>
       	</li>
       	<li className="work-link ">
       		<a href="./category/notes">Notes</a>
       	</li>
       	<li className="about-link">
       		<a href="./about-me/">About</a>
       	</li>
       	<li className="contact-link">
       		<a href="./get-in-touch/">Contact</a>
       	</li>
       </ul>
      </nav>
    );
  }
}

export default Navigation;

