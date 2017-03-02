import React, { Component } from 'react';

import styles from './Change.css';

class Content extends Component {

  constructor(props) {
    super();
    this.showContent = this.showContent.bind(this)

  }

  showContent(){
    console.log(this.props)
    if (this.props.params.linkId != undefined){
      return (<div id="content" className={styles.content}>


        <div className={styles.notesCol}>
        <li className={styles.noteItem}>

        <div className="note-container talk-container group past-event">
        <a href="http://owltastic.com/writing/2016/04/14/webvisions-chicago/" className="talk-thumbnail">
        <h2>
        WebVisions {this.props.params.linkId}                 <em>
        September 23, 2016 </em>
        </h2>
        <img src="http://freepages.nostalgia.rootsweb.ancestry.com/~cyberheritage/gran1.jpg" className={styles.imagey}/>            
        </a>
        <a href="http://owltastic.com/writing/2016/04/14/webvisions-chicago/ ">
        <h3>Past Event</h3>
        </a>
        <p>In September 2015 I did my first WebVisions event with WebVisions Chicago. I also kicked off a new talk, “Users are People Too,” which discusses why Emotional Design matters, and some practical ways for incorporating it into your work.</p>
        <p><em>Photo by <a href="https://www.flickr.com/photos/sunsetnoir/21326532563/in/photolist-yuy48i-5CZRFN-gM88H-4Tqodn-fLSH2S-hF3tcT-8wAp1N-62vAsR-t7uuRd-8xNdht-eSXjjq-nacnXZ-e2zaKD-wcPcTY-Js7UM-5g7n2S-a9WFqL-8oX1d1-nenNcS-raXDkQ-dZBbcC-ejZsdS-4j27Wg-4Tuyms-xvojaA-edSpf9-pNwv4Q-a1WfpW-dYSEjP-zihSEz-xU8UNx-xcBYZ1-gXGxFj-oPdNvz-Ej9py-7jaYw-fp24VM-uPcHcK-e7rkJV-moeBVc-4Tuw3o-kgyzkr-getHK6-iVE8FC-a1We4w-6PToHR-CsnPve-H4BRh-tzFW8i-jwAwYW">Lei Han</a></em>
        </p>
        </div>
        </li>
        </div>


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