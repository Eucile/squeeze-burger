import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import '../assets/styles/AdminLogIn.scss';
import { handleLogin, getCurrentUser } from '../actions';

class AdminLogIn extends React.Component {

  render() {
    if(getCurrentUser()) {
      return (<div><Redirect to='/admin' /></div>)
    }
    return(
      <div className="log-in-styles">
      <div>
          <form onSubmit={() => {handleLogin(this.email.value, this.password.value)}}>
            <p>Sign into your account.</p>
            <input className="input"
              type='text'
              id='username'
              placeholder='email:'
              ref={(input) => {this.email = input;}}/>
            <input className="input"
              type='password'
              id='password'
              placeholder='password:'
              ref={(input) => {this.password = input;}}/>
            <button className='login-button' type='submit'>log in</button>
          </form>
          </div>
      </div>
    );
  }
};

export default AdminLogIn;
