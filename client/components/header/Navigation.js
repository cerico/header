import React, { Component } from 'react';
import styles from './Header.css';
console.log(styles)

class Navigation extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <nav className={styles.navigation}>
       <ul>
       	<li className={styles.writing}>
       		<a href="./category/writing">Writing</a>
       	</li>
       	<li className={styles.notes}>
       		<a href="./category/speaking">Speaking</a>
       	</li>
       	<li className={styles.talks}>
       		<a href="./category/working">Work</a>
       	</li>
       	<li className={styles.work}>
       		<a href="./category/notes">Notes</a>
       	</li>
       	<li className={styles.about}>
       		<a href="./about-me/">About</a>
       	</li>
       	<li className={styles.contact}>
       		<a href="./get-in-touch/">Contact</a>
       	</li>
       </ul>
      </nav>
    );
  }
}

export default Navigation;

