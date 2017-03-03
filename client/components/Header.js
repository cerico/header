import React, { Component } from 'react';
import Description from './header/Description.js';
import Navigation from './header/Navigation.js';
import styles from './header/Header.css';
console.log(styles)

class Header extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    const active = this.props.routes[1].path
    return (
      <div className={styles.header}>
       <Description/>
       <Navigation underline={active} addActiveBorder={this.props.addActiveBorder}/>
      </div>
    );
  }
}

export default Header;

