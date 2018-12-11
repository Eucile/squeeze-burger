import React from "react";
import '../assets/styles/Header.scss';
import whiteLogo from '../assets/logos/squeeze_logo_white.png';
import burgerMenu from '../assets/logos/orange_burger_menu.png';

function Header(){
  return (
    <div className="HeaderStyles">
        <ul className="nav-list">
          <li className="nav-list">home</li>
          <li className="nav-list">menu</li>
          <li className="nav-list">locations</li>
          <li className="nav-list">story</li>
        </ul>
        <div></div>
        <div>
          <button className="booking-button">book catering</button>
        </div>
    </div>
  );
}

export default Header;
