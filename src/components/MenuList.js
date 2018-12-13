import React from "react";
import '../assets/styles/MenuList.scss';
import menu from '../assets/logos/MENU.png';

function MenuList(){

  return (
    <div className="slide2">
      <div className="menu-banner">
        <div className="banner-underline">
          <img src={menu}/>
        </div>
      </div>
      <div className="menu-container">
        <div className="main-menu">
          <h1>Mains</h1>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Burger</h3><h3> 10.00</h3>
              </div>
                <p>lettuce, tomato, pickles, onion, mayo, mustard</p>
            </div>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Hotdog</h3><h3> 7.00</h3>
              </div>
                <p>lettuce, tomatoes, pickles, onion, mayo, mustard, relish</p>
            </div>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Chicken sandwich</h3><h3> 9.00</h3>
              </div>
              <p>bacon, mayo, avocado, onion, lettuce, tomatoes</p>
            </div>
          </div>
          <div className="sides-menu">
            <h1>Sides</h1>
            <div className="side-flex">
            <div>
            <p>fries</p>
            <p>onion rings</p>
            </div>
              <p className="combo"><em>(sides included as combo with your main order)</em></p>
            </div>
          </div>
        </div>
        <div className="menu-bottom">
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </div>
      </div>
  );
}

export default MenuList;
