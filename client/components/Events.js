import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';

class Events extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)
   
      return (
        <div id="content" className={styles.content}>
          <div className={styles.purple}>
          <ul className={styles.list}>
            {this.props.events.map((event) =>  <Event key={event.name} {...event} />)}
          </ul>
          </div>
        <div className="notes-navigation">
        </div>



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