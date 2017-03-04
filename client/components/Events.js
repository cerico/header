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
    // alert(this.props.events.length / 3)
    let firstCol = [];
    let secondCol = [];
    let thirdCol = [];
    let items = [firstCol,secondCol,thirdCol]
    {this.props.events.map((event) =>  items.sort((a,b) => a.length < b.length ? -1 : 1)[0].push(event))}
    
    // this.props.events.map(event) => 
   
      return (
        <div id="content" className={styles.events}>
          <ul className={styles.list}>
            <div className={styles.notesCol}>
              {thirdCol.map((event) =>  <Event key={event.name} {...event} />)}
              </div>
              <div className={styles.notesCol}>
                {secondCol.map((event) =>  <Event key={event.name} {...event} />)}
                </div>
                <div className={styles.notesCol}>
                  {firstCol.map((event) =>  <Event key={event.name} {...event} />)}
                  </div>
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