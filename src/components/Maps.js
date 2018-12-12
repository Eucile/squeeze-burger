import React from "react";
import '../assets/styles/Maps.scss';
import dummyMap from '../assets/img/dummymap.png';
import schedule from '../assets/logos/SCHEDULE_orange.png';

function Maps(){

  return (
    <div className="map-container">
      <div className="schedule-banner">
        <div className="schedule-border">
          <img src={schedule}/>
        </div>
      </div>
      <div className="content-container">
        <div className="arrange-catering-button">
          <button className="map-catering-button">book catering</button>
        </div> 
      </div>
    </div>
  );
}

export default Maps;
