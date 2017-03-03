import React, { Component } from 'react';
import styles from './Header.css';
console.log(styles)

class Description extends Component {

  constructor() {
    super();
   }

  render() {
    console.log(this) 
    return (
      <div className={styles.description}>
      <h1 className={styles.title}></h1>
      	<div className={styles.tagline}>
      		<h2>Design Develop & Code</h2>
      	</div>
      </div>
    );
  }
}

export default Description;

