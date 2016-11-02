import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class UserButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = this.props.currentUser;
    if (currentUser === null) {
      return (
        <div>
          <Link className="user-button" to="/">Become a Host</Link>
          <Link className="user-button" to="/signup">Signup</Link>
          <Link className="user-button" to="/login">Login</Link>
        </div>
      );
    }
    else if (currentUser.is_host === false) {
      return (
        <div>
          <Link className="user-button" to="/">Become a Host</Link>
          <Link className="user-button" to="/">Trips</Link>
          <Link className="user-button" to="/">{currentUser.first_name}</Link>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link className="user-button" to="/">My Listings</Link>
          <Link className="user-button" to="/">Trips</Link>
          <Link className="user-button" to="/">{currentUser.first_name}</Link>
        </div>
      );
    }
  }
}

export default withRouter(UserButtons);
