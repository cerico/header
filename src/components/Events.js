import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';
import BodyColor from './Body.js';
console.log(BodyColor)

class Events extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)
    console.log(this.props.params)
   
      return (
        <div id="content" className={styles.events}>
          <ul className={styles.list}>
            {this.props.events.map((event) =>  <Event key={event.name} {...event} />)}
          </ul>
        <div className="notes-navigation">
        </div>
        <BodyColor bodyColour={styles.eventsBody}/>



        </div>)
  }

  render() {
    console.log(this)
    console.log(this.props.yes)


    return(
      this.showContent()
      )
  }
}

export default Events;