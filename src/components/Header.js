import React from "react";
import burgerMenu from './burgermenu.png';
import '../assets/styles/Header.css';
import orangeLogo from '../assets/logos/squeeze_logo_orange.png';

function Header(){
  return (
    <div className="HeaderStyles">
      <div className="header-content">
        <img src={burgerMenu}/><img className="orange-logo" src={orangeLogo}/>
        <ul>
          <li className="nav-list">home</li>
          <li className="nav-list">menu</li>
          <li className="nav-list">locations</li>
          <li className="nav-list">story</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
