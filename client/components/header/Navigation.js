import React, { Component } from 'react';
import styles from './Header.css';
import { Link } from 'react-router';
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
          <Link to={`/category/events/`}>events</Link>
       	</li>
       	<li className={styles.notes}>
       		<Link to={`/category/writing/`}>writing</Link>
       	</li>
       	<li className={styles.talks}>
       		<Link to={`/category/workshops/`}>workshops</Link>
       	</li>
       	<li className={styles.work}>
       		<Link to={`/category/about/`}>about</Link>
       	</li>
       	<li className={styles.about}>
       		<Link to={`/category/consulting/`}>consulting</Link>
       	</li>
       	<li className={styles.contact}>
       		<Link to={`/category/fieldwork/`}>fieldwork</Link>
       	</li>
       </ul>
      </nav>
    );
  }
}

export default Navigation;

