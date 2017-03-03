import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';
import BodyColor from './Body.js';
console.log(BodyColor)

class Contact extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){   
      return (
        <div id="content" className={styles.events}>
          <ul className={styles.list}>
            {this.props.events.map((event) =>  <Event key={event.name} {...event} />)}
          </ul>
        <div className="notes-navigation">
        </div>
        <BodyColor bodyColour={styles.fieldworkBody}/>
        </div>
        )
  }

  render() {
    console.log(this)
    console.log(this.props.yes)


    return(
      this.showContent()
      )
  }
}

export default Contact;