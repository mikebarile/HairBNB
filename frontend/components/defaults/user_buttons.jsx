import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class UserButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    this.props.logout();
  }

  render() {
    let currentUser = this.props.currentUser;
    if (currentUser === null) {
      return (
        <div className="user-buttons">
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
            <button
              onClick={this.props.logout}
              className="user-button-logout" to="/">Logout
            </button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link className="user-button" to="/">My Listings</Link>
          <Link className="user-button" to="/">Trips</Link>
          <button
            onClick={this.props.logout}
            className="user-button-logout" to="/">Logout
          </button>
        </div>
      );
    }
  }
}

export default withRouter(UserButtons);
