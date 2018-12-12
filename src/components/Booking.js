import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './Header';
import { Input, Row, Option, Icon, Button, Col} from 'react-materialize';
import '../assets/styles/Booking.scss';


function Booking(){
  return (
    <form id="contact-form">
           <input type="hidden" name="contact_number"/>
           <label>Name</label>
           <input type="text" name="user_name"/>
           <label>Email</label>
           <input type="email" name="user_email"/>
           <label>Message</label>
           <textarea name="contact"></textarea>
           <input type="submit" value="Send"/>
       </form>
  );
}

export default Booking;



// <Row>
//   <Col s={12}>
//     <div className="container">
//       <form action="mailto:amcgladd@gmail.com" method="POST" encType="text/plain">
//         <Row>
//           <h5>About Your Event</h5>
//           <Input s={12} type='select' label="Event Type" defaultValue='2' name="Event Type:">
//             <option value='Office_Lunch'>Office Lunch</option>
//             <option value='Private_Party'>Private Party</option>
//             <option value='Public_event'>Public event or festival</option>
//             <option value='Wedding'>Wedding</option>
//           </Input>
//         </Row>
//         <Row>
//           <Input  s={12} name='on' type='date' required="required" label="Date of your event" onChange={function(e, value) {}} />
//         </Row>
//         <Row>
//           <Input name="from" placeholder="from" s={6} label="Time Range" />
//           <Input name="to" placeholder="to" s={6} />
//         </Row>
//         <Row>
//           <Input name="location" s={12} label="Location" />
//         </Row>
//         <Row>
//           <Input s={12} name="Guests" type="number" label="Approx. number of guests" />
//         </Row>
//         <Row>
//           <Input s={12}  name="Paying" type='select' label="Who Is Paying?" defaultValue='1'>
//             <option value='1'>Our Guests</option>
//             <option value='2'>We Are</option>
//           </Input>
//         </Row>
//         <Row>
//           <Input s={12}  name="Event Details" type='textarea' placeholder="Tell Us About Your Event" />
//         </Row>
//         <Row>
//           <h5>Contact Information:</h5>
//           <Input name="Name" s={12} label="Your Name" validate><Icon>account_circle</Icon></Input>
//         </Row>
//         <Row>
//           <Input s={12} name="Phone" label="Telephone" validate type='tel'><Icon>phone</Icon></Input>
//         </Row>
//         <Row>
//           <Input type="email" name="email" label="Email" s={12} ><Icon>email</Icon></Input>
//         </Row>
//
//         <Row>
//           <Input s={12} name="company" placeholder="company"><Icon>home</Icon></Input>
//         </Row>
//         <Button type="submit" waves='light' type="submit" value="Send">button</Button>
//       </form>
//     </div>
//   </Col>
// </Row>
