import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../assets/styles/Booking.scss';

function Booking(){



  return (
    <form id="contact-form">
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
      <input required="required" name="name"/>
      <br/>
      <label>Phone:</label>
      <input name="phone" validate='true'/>
      <br/>
      <label>Email:</label>
      <input required="required" name="email"/>
      <br/>
      <label>Company:</label>
      <input name="company"/>
      <br/>
      <input type="submit" value="Send"/>
    </form>
  );
}



export default Booking;
