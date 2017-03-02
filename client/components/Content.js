import React, { Component } from 'react';

import styles from './Change.css';
import Event from './Event.js';

class Content extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)

      return(
        <div id="content" className={styles.theBackground}>yes</div>
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