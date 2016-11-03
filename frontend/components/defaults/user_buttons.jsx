import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Modal from 'boron/FadeModal';
import SignupForm from '../user_form/user_form_container';
import LoginForm from '../session_form/session_form_container';

class UserButtons extends React.Component {
  constructor(props) {
    super(props);
    this.showSignupModal = this.showSignupModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.logout = this.logout.bind(this);
    this.callback = this.callback.bind(this);
  }

  showSignupModal() {
    this.refs.signupModal.show();
  }

  hideSignupModal() {
    this.refs.signupModal.hide();
  }

  showLoginModal() {
    this.refs.loginModal.show();
  }

  hideLoginModal() {
    this.refs.loginModal.hide();
  }

  logout() {
    this.props.logout();
  }

  callback(e) {
    console.log(e);
  }

  render() {
    let currentUser = this.props.currentUser;
    if (currentUser === null) {
      return (
        <div className="user-buttons">
          <Link className="user-button" to="/">Become a Host</Link>
          <button className="user-button" onClick={this.showSignupModal}>Signup</button>
          <Modal className="userModal" ref="signupModal" keyboard={this.callback}>
            <SignupForm/>
          </Modal>
          <button className="user-button" onClick={this.showLoginModal}>Login</button>
          <Modal className="userModal" ref="loginModal" keyboard={this.callback}>
            <LoginForm/>
          </Modal>
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
