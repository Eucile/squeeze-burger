import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import whiteLogo from '../assets/logos/squeeze_logo_white.png';
import burgerMenu from '../assets/logos/orange_burger_menu.png';
import { handleLogout, getCurrentUser } from '../actions';

function getButton() {
  if(getCurrentUser()){
    return <button onClick={handleLogout} className='login-button' type='submit'>log out</button>
  } else {
    return <Link to="/login" style={{ color: '#FFF', textDecoration: 'none' }}>log in</Link>
  }
}

function Header(){
  return (
    <div className="HeaderStyles">
        <ul className="nav-list">
          <li className="nav-list"><Link to="/"style={{ color: '#FFF', textDecoration: 'none' }}>home</Link></li>
          <li className="nav-list">menu</li>
          <li className="nav-list">locations</li>
          <li className="nav-list">story</li>
          <li>{getButton()}</li>
        </ul>
        <div></div>
        <div>
          <button className="booking-button">book catering</button>
        </div>
    </div>
  );
}

export default Header;
