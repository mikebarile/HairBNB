import React from 'react';
import { Link } from 'react-router';

const Greeting = ({currentUser, logout}) => {
  if (currentUser !== null) {
    return (
      <div>
        <h2>Welcome {currentUser.username}!</h2>
        <br/>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  else {
    return (
      <div>
        <Link to="/signup">Signup</Link> or
        <Link to="/login"> Login</Link>!
      </div>
    );
  }
};

export default Greeting;
