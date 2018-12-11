import React from "react";
import '../assets/styles/Hero.scss';
import blackLogo from '../assets/logos/squeeze_logo_black.png';


function Maps(){

  return (
    <div class="flex-container">
      <div class="slide1">
        <div className="hero-center">
          <img className="black-logo" src={blackLogo}/>
        </div>
      </div>
    </div>
  );
}

export default Maps;