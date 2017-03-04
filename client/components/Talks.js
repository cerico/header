import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';
import BodyColor from './Body.js';
console.log(BodyColor)

class Talks extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)
    console.log(this.props.params)
    let firstCol = [];
    let secondCol = [];
    let thirdCol = [];
    let items = [firstCol,secondCol,thirdCol]
    {this.props.talks.map((event) =>  items.sort((a,b) => a.length < b.length ? -1 : 1)[0].push(event))}
   
      return (
        <div id="content" className={styles.events}>
          <div className={styles.notesCol}>
            {thirdCol.map((event) =>  <Event key={event.name} {...event} />)}
            </div>
            <div className={styles.notesCol}>
              {secondCol.map((event) =>  <Event key={event.name} {...event} />)}
              </div>
              <div className={styles.notesCol}>
                {firstCol.map((event) =>  <Event key={event.name} {...event} />)}
                </div>
        <div className="notes-navigation">
        </div>
        <BodyColor bodyColour={styles.workshopsBody}/>



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

export default Talks;