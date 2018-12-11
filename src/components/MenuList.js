import React from "react";
import '../assets/styles/MenuList.scss';

function MenuList(){

  return (
    <div className="slide2">
    <div className="menu-container">
      <div className="main-menu">
        <h1>Mains</h1>
          <div>
            <h2>Burgers</h2>
            <p>lettuce tomato pickles onion mayo mustard.</p>
          </div>
          <div>
            <h2>Hotdogs</h2>
            <p>lettuce tomatoes pickles onion mayo mustard relish</p>
          </div>
          <div>
            <h2>Burgers</h2>
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
