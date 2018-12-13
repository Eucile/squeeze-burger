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
    <div className="form-container">
      <style>{`
        .form {
          margin: 0 auto;
          width: 400px;
          padding: 1em;
          border: 1px solid #CCC;
          border-radius: 1em;
        }
        input {
          border: 1px solid #CCC;
          border-radius: 5px;
        }
        textarea {
          margin-top: 20px;
          margin-bottom: 20px;
          border: 1px solid #CCC;
          border-radius: 5px;
          width: 93%;
          height: 30px;
        }
        label {
          margin-right: 10px;
        }
        .button {
          background-color: #D9672A;
          border: none;
          border-radius: 1em;
          color: #FFFFFF;
          font-family: 'Montserrat';
          font-weight: bold;
        }
      `}</style>
      <form className="form">
        <h2>Contact Information:</h2>
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
        <h2>Event Information:</h2>
        <label>Date of event:</label>
        <input name='date' type='date' label="Date of your event" onChange={function(e, value) {}} />
        <br/>
        <label>From:</label>
        <input type="time" name="from" placeholder="from" label="Time Range" />
        <span>to:</span>
        <input type="time" name="to" placeholder="to" />
        <br/>
        <label>Location:</label>
        <input name="location" label="Location"/>
        <br/>
        <label>Number of guests:</label>
        <input name="guests" type="number" label="Approx. number of guests" />
        <br/>
        <label>Tell us about your event:</label>
        <br/>
        <textarea name="details"></textarea>
        <br/>
        <input type="submit" className="button" id="myBtn" onClick={formSubmit} value="SEND"/>
      </form>


      <div id="myModal" className="modal">
        <div className="modal-content">
          <p id="myCloseBtn" className="close">&times;</p>
          <p>Thanks for your event request!</p>
          <p>Someone will reach out to you shortly.</p>
        </div>
      </div>
    </div>
  );
}


export default Booking;
