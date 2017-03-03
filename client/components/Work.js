import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';
import BodyColor from './Body.js';
console.log(BodyColor)

class Work extends Component {

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
            {this.props.skills.map((skill) =>  <Event key={skill.name} {...skill} />)}
          </ul>

        <BodyColor bodyColour={styles.writingBody}/>
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

export default Work;