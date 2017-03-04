import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';
import BodyColor from './Body.js';


class Content extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)

      return(
        <div id="content">
        <main className={styles.container}>
          
        <div className={styles.spacer}></div>
        <div className={styles.what}>
          
          
          About Todmorden. There are many reasons to visit Todmorden, it has a long and spectacular history

        </div>
        </main>
        <BodyColor bodyColour={styles.frontBody}/></div>
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

export default Content;