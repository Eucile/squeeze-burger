import React from "react";
import '../assets/styles/MenuList.scss';
import menu from '../assets/logos/MENU.png';


function MenuList(){

  return (
    <div className="slide2">
    <div className="menu-banner">
      <img src={menu}/>
    </div>
    <div className="menu-container">
      <div className="main-menu">
        <h1>Mains</h1>
          <div>
          <div className="menu-title-flex">
            <h2>Burger</h2><h2> 8.00</h2>
          </div>
            <p>lettuce tomato pickles onion mayo mustard.</p>
          </div>
          <div>
          <div className="menu-title-flex">
            <h2>Hotdog</h2><h2> 7.00</h2>
          </div>
            <p>lettuce tomatoes pickles onion mayo mustard relish</p>
          </div>
          <div>
            <div className="menu-title-flex">
              <h2>Chicken sandwich</h2><h2> 10.00</h2>
            </div>
            <p>bacon mayo avocado onion lettuce tomatoes.</p>
          </div>
        </div>
        <div className="sides-menu">
        <h1>Sides</h1>
          <p>fries</p>
          <p>onion rings</p>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
