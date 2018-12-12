import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../assets/styles/Booking.scss';

function Booking(){

  document.addEventListener("DOMContentLoaded", function(event) {
    let modal = document.getElementById('myModal');
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    btn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });

  function formSubmit(){
    var form = document.getElementById("contact-form");
    form.reset();
  }

  return (
    <div>
      <form id="contact-form" className="contact">
        <label>Date Of Event</label>
        <input name='date' type='date' label="Date of your event" onChange={function(e, value) {}} />
        <br/>
        <label>Approx. from  </label>
        <input type="time" name="from" placeholder="from" label="Time Range" />
        <span>  to  </span>
        <input type="time" name="to" placeholder="to" />
        <br/>
        <label>Location</label>
        <input name="location" label="Location"/>
        <br/>
        <label>Approx. number of Guests</label>
        <input name="guests" type="number" label="Approx. number of guests" />
        <br/>
        <label>Tell Us About Your Event</label>
        <textarea name="details"></textarea>
        <br/>
        <label>Name:</label>
        <input name="name"/>
        <br/>
        <label>Phone:</label>
        <input name="phone" validate='true'/>
        <br/>
        <label>Email:</label>
        <input name="email"/>
        <br/>
        <label>Company:</label>
        <input name="company"/>
        <br/>
        <input type="submit" id="myBtn" onClick={formSubmit} value="Send"/>
      </form>


      <div id="myModal" className="modal">
        <div className="modal-content">
          <p id="myCloseBtn" className="close">&times;</p>
          <p>Thanks for your Event Request.</p><p> We will get back to you Shortly</p>
        </div>
      </div>
    </div>
  );
}


export default Booking;
