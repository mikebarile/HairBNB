import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome {currentUser}!</h2>
        <br/>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  else {
    return (
      <div>
        <Link to="/#/signup">Signup</Link>
        <br/>
        <Link to="/#/login">Login</Link>
      </div>
    );
  }
};

export default Greeting;
