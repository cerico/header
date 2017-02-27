import React, { Component } from 'react';
import Description from './header/Description.js';
import Navigation from './header/Navigation.js';
import css from './header/Header.css';


class Header extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className="site-header group">
       <Description/>
       <Navigation/>
      </div>
    );
  }
}

export default Header;

