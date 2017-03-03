import React, { Component } from 'react';
import styles from './Header.css';
import { Link } from 'react-router';
const classNames = require('classnames');

console.log(styles)


class Navigation extends Component {

  constructor() {
    super();

   this.state = {
         selected:""
       };
    
   }

 


  isActive (value){
    if (value === this.props.underline){
     return styles.active
   } else {
    return ""
      // return 'btn '+((value===this.state.selected) ?'active':'default');
   }
    }

  render() {
    console.log(this) 
    const links = ['events','notes','talks','work','about','contact']
    const addActiveBorder = this.props.addActiveBorder;
    const underline = this.props.underline
    return (
      <nav className={styles.navigation}>
        <ul>
          {links.map((link) => <li onClick={() => addActiveBorder(link)} key={link} ref={link} className={`${this.isActive(link)} ${styles[link]}`}><Link  to={`/${link}/`}>{link}</Link></li>)}
        </ul>
      </nav>
    );
  }
}

export default Navigation;



