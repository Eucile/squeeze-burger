import React from "react";
import '../assets/styles/Story.scss';
import brandon from  '../assets/img/brandon.jpg';
import story from  '../assets/logos/OUR STORY_orange.png';


function Story(){

  return (
    <div className="slide3">
      <div className="story-container">
        <div className="our-story-text">
        <div className="our-story-header-overlay"><img src={story}/></div>
        <p>Lorem ipsum dolor sit amet, justo dicta eloquentiam vel te, cu cetero sadipscing delicatissimi eum. Mei cu eleifend convenire signiferumque. Alii maiorum vivendum eum eu, no quas copiosae sadipscing pro, iusto verterem indoctum per eu. Te sed wisi legere admodum, per vidit aliquam temporibus ut, cu diam repudiare duo.

        Delectus patrioque has te, impetus graecis liberavisse usu ad. Ignota scripta.</p>
        </div>
        <div className="story-image">
          <img src={brandon}/>
        </div>
      </div>
    </div>
  );
}

export default Story;
