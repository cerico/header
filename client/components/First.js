import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from './Header.js';
import Content from './Content.js';
import styles from './Change.css';


class Main extends Component {

  constructor() {
    super();

   }

  render() {
    const no = "love it"
    return (
      <div className={styles.container}>
        <Header/>
        {React.cloneElement(this.props.children, this.props)}
        </div>
    );
  }
}

export default Main;


