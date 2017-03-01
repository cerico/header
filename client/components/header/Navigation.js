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
          <Link to={`/category/todmorden/`}>Todmorden</Link>
       	</li>
       	<li className={styles.notes}>
       		<Link to={`/category/huddersfield/`}>Huddersfield</Link>
       	</li>
       	<li className={styles.talks}>
       		<Link to={`/category/glossop/`}>Glossop</Link>
       	</li>
       	<li className={styles.work}>
       		<Link to={`/category/kendal/`}>Kendal</Link>
       	</li>
       	<li className={styles.about}>
       		<Link to={`/category/wakefield/`}>Wakefield</Link>
       	</li>
       	<li className={styles.contact}>
       		<Link to={`/category/penrith/`}>Penrith</Link>
       	</li>
       </ul>
      </nav>
    );
  }
}

export default Navigation;

