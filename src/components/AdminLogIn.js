import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../assets/styles/AdminLogIn.scss';

class AdminLogIn extends React.Component{

  handleLogin = () => {
    this.props.firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value).then(console.log('login')).catch(function(error) {
      alert('nope');
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

  render() {
    return(
      <div className="log-in-styles">
          <form onSubmit={this.handleLogin}>
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
    );
  }
};

export default AdminLogIn;
