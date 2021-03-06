import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Change.css';


class Event extends Component {

  constructor() {
    super();

  }

  render() {
    console.log(this.props)
    const town = this.props.name.toLowerCase()
    const img = require(`./img/${town}.jpg`)
    return (
      
        <li className={styles.noteItem}>
          <div className={styles.noteContainer}>
            <a href="#" className={styles.talkThumbnail}>
              <h2>{this.props.name}
                <em>{this.props.date}</em>
              </h2>
              <img src={img} className={styles.imagey}/>            
            </a>
            <h3 className={styles.tabletTitle}>Address</h3>
            <p className={styles.tabletWords}>{this.props.address}</p>
          </div>
        </li>
      
    );
  }
}

export default Event;


