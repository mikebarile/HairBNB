import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Modal from 'boron/FadeModal';
import SignupForm from '../user_form/user_form_container';
import LoginForm from '../session_form/session_form_container';

class UserButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {switch: false};

    this.showSignupModal = this.showSignupModal.bind(this);
    this.hideSignupModal = this.hideSignupModal.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.hideLoginModal = this.hideLoginModal.bind(this);
    this.logout = this.logout.bind(this);
    this.callback = this.callback.bind(this);
    this.switchToLogin = this.switchToLogin.bind(this);
    this.switchToSignup = this.switchToSignup.bind(this);
    this.setSwitch = this.setSwitch.bind(this);
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

  callback(e) {
    console.log(e);
  }

  logout() {
    this.props.logout();
  }

  switchToLogin() {
    if (this.state.switch === true){
      this.setState({switch: false});
      this.showLoginModal();
    }
    this.props.clearErrors();
  }

  switchToSignup() {
    if (this.state.switch === true){
      this.setState({switch: false});
      this.showSignupModal();
    }
    this.props.clearErrors();
  }

  setSwitch() {
    this.setState({switch: true});
  }

  render() {
    let currentUser = this.props.currentUser;
    if (currentUser === null) {
      return (
        <div className="user-buttons">
          <Link className="user-button" to="/">Become a Host</Link>

          <button className="user-button-new" onClick={this.showSignupModal}>Signup</button>
          <Modal
            className="user-modal"
            ref="signupModal"
            keyboard={true}
            onHide={this.switchToLogin}>
            <SignupForm hideSignupModal={this.hideSignupModal} switch={this.setSwitch}/>
          </Modal>

          <button className="user-button-new" onClick={this.showLoginModal}>Login</button>
          <Modal
            lassName="user-modal"
            ref="loginModal"
            keyboard={true}
            onHide={this.switchToSignup}>
            <LoginForm hideLoginModal={this.hideLoginModal} switch={this.setSwitch}/>
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
