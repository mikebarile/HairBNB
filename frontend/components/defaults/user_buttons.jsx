import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

class UserButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let currentUser = this.props.currentUser;
    if (currentUser !== null) {
      return (
        <div>
          <h2>Welcome {currentUser.first_name}!</h2>
          <br/>
          <button onClick={this.props.logout}>Logout</button>
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
  }
}

export default withRouter(UserButtons);
