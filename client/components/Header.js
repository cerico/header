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
    return (
      <div className={styles.header}>
       <Description/>
       <Navigation underline={this.props.underline} addActiveBorder={this.props.addActiveBorder}/>
      </div>
    );
  }
}

export default Header;

