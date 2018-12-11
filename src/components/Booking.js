import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import { Input, Row, Option, Icon, Button } from 'react-materialize';


function Booking(){
  return (
    <Row>
      <Row>
        <h5>About Your Event</h5>
        <Input s={6} type='select' label="Event Type" defaultValue='2'>
        <option value='1'>Office Lunch</option>
        <option value='2'>Private Party</option>
        <option value='3'>Public event or festival</option>
        <option value='4'>Wedding</option>
        </Input>
      </Row>
      <Row>
        <Input  s={6} name='on' type='date' required="required" label="Date of your event" onChange={function(e, value) {}} />
      </Row>
      <Row>
        <Input placeholder="from" s={3} label="Time Range" />
        <Input placeholder="to" s={3} />
      </Row>
      <Row>
         <Input s={6} label="Location" />
      </Row>
      <Row>
         <Input s={6} type="number" label="Approx. number of guests" />
      </Row>
      <Row>
      <Input s={6} type='select' label="Who Is Paying?" defaultValue='1'>
        <option value='1'>Our Guests</option>
        <option value='2'>We Are</option>
      </Input>
      </Row>
      <Row>
        <Input s={6} type='textarea' placeholder="Tell Us About Your Event" />
      </Row>
      <Row>
        <h5>Contact Information:</h5>
      <Input s={6} label="Your Name" validate><Icon>account_circle</Icon></Input>
      </Row>
      <Row>
      <Input s={6} label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
      </Row>
      <Row>
        <Input type="email" label="Email" s={6}><Icon>email</Icon></Input>
      </Row>

      <Row>
        <Input s={6} placeholder="company"><Icon>home</Icon></Input>
      </Row>
      <Button waves='light'>button</Button>
    </Row>
  );
}

export default Booking;
