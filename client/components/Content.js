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
    
    if (this.props.params.linkId != undefined){
      return (<div id="content" className={styles.content}>

        {this.props.events.map((event) =>  <Event key={event.name} {...event} />)}



        <div className="notes-navigation">
        </div>



        </div>)
    }else{
      return(
        <div id="content" className="site-content"></div>
        )
    }
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