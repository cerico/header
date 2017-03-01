import React, { Component } from 'react';



class Content extends Component {

  constructor() {
    super();
    alert("contnet")
   }

  render() {
    console.log(this) 
    return (
      <div id="content" class="site-content">


      	<div class="posts-list-notes">
      		<ul class="group notes-grid" data-columns="3">
      			<div class="notes-column size-1of3">
      				<li class="note-item page-title">
      					<h1>Upcoming &amp; Past Events</h1>
      					<p>I love speaking! I've given talks in 18 cities in 8 different countries. If you're interested in having me speak at your next conference, drop me a line at <a href="mailto:contact@owltastic.com">contact@owltastic.com</a>.</p>
      				</li>
      				<li class="group note-item">

      					<div class="note-container talk-container group past-event">
      						<a href="http://owltastic.com/writing/2016/04/14/webvisions-chicago/" class="talk-thumbnail">
      							<h2>
      								WebVisions Chicago                  <em>
      								September 23, 2016 </em>
      							</h2>
      							<img width="1426" height="1069" src="http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1.jpg" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="21326532563_f251ced400_h1" srcset="http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1.jpg 1426w, http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1-300x225.jpg 300w, http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1-768x576.jpg 768w, http://owltastic.com/writing/wp-content/uploads/2016/04/21326532563_f251ced400_h1-1024x768.jpg 1024w" sizes="(max-width: 1426px) 100vw, 1426px"/>            
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

      	<div class="notes-navigation">
      	</div>



      </div>
    );
  }
}

export default Content;