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
        <div id="content">We believe in building self-sustaining, purposeful products. We tend to build products that scratch our itch, products that we want to exist in this world. As users ourselves, we care deeply about the user experience and building products that last.
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