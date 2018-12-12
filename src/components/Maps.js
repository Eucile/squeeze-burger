import React from "react";
import '../assets/styles/Maps.scss';
import dummyMap from '../assets/img/dummymap.png';
import insta1 from '../assets/img/insta1.png';
import insta2 from '../assets/img/insta2.png';
import insta3 from '../assets/img/insta3.png';
import insta4 from '../assets/img/insta4.png';
import insta5 from '../assets/img/insta5.png';
import truck from '../assets/img/white_truck.png';
import schedule from '../assets/logos/SCHEDULE_orange.png';

function Maps(){

  return (
    <div className="map-container">
    <div className="schedule-banner">
      <img src={schedule}/>
    </div>
    <div className="content-container">
      <div className="google-map-list">
        <div><img src={dummyMap}/></div>
        <div><img src={dummyMap}/></div>
        <div><img src={dummyMap}/></div>
      </div>
      <div className="social-sidebar">
      <div className="arrange-catering-button">
        <button className="map-catering-button">book catering</button>
      </div>
        <div className="social-flex">
          <div>
            <img src={insta2}/>
            <img src={insta3}/>
          </div>
          <div>
            <img src={insta4}/>
            <img src={insta5}/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Maps;
