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


        <div className="posts-list-notes">
          <ul className="group notes-grid" data-columns="3">
            <div className="notes-column size-1of3">
              <li className="note-item page-title">
                <h1>Upcoming &amp; Past Events</h1>
                <p>I love speaking! I've given talks in 18 cities in 8 different countries. If you're interested in having me speak at your next conference, drop me a line at <a href="mailto:contact@owltastic.com">contact@owltastic.com</a>.</p>
              </li>
              <li className="group note-item">

                <div className="note-container talk-container group past-event">
                  <a href="http://owltastic.com/writing/2016/04/14/webvisions-chicago/" className="talk-thumbnail">
                    <h2>
                      WebVisions {this.props.params.linkId}                 <em>
                      September 23, 2016 </em>
                    </h2>
                    <img width="1426" height="1069" src="http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1.jpg" className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="21326532563_f251ced400_h1"  sizes="(max-width: 1426px) 100vw, 1426px"/>            
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
          </ul>
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