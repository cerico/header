import React, { Component } from 'react';
import styles from './Header.css';
import { Link } from 'react-router';
console.log(styles)

class Description extends Component {

  constructor() {
    super();
  }

  render() {
    console.log(this) 
    return (
      <div className={styles.description}>
      <Link  to={`/`}>
      <h1 className={styles.title}>
      Beba</h1>
      </Link>
      <div className={styles.tagline}>
      <h2>Design Develop & Code</h2>
      </div>
      </div>
      );
  }
}

export default Description;

