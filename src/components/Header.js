import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import whiteLogo from '../assets/logos/squeeze_logo_white.png';
import burgerMenu from '../assets/logos/orange_burger_menu.png';
import { handleLogout, getCurrentUser } from '../actions';

function getButton() {
  if(getCurrentUser()){
    return <li onClick={handleLogout} className='logout-button' type='submit'>log out</li>
  } else {
    return <Link to="/login" style={{ color: '#FFF', textDecoration: 'none' }}>log in</Link>
  }
}

function Header(){
  return (
    <div className="HeaderStyles">
        <ul className="nav-list">
          <li className="nav-list">
            <Link to="/"style={{ color: '#FFF', textDecoration: 'none' }}>home</Link>
          </li>
          <li className="nav-list">menu</li>
          <li className="nav-list">locations</li>
          <li className="nav-list">story</li>
          <li>{getButton()}</li>
        </ul>
        <div></div>
        <div>
          <button className="booking-button">
            <Link to="/booking">book catering</Link>
          </button>
        </div>
    </div>
  );
}

export default Header;
