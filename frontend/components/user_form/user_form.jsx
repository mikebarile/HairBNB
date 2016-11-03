import React from 'react';
import { Link } from 'react-router';

class UserForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          is_host: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setState = this.setState.bind(this);
      this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    return(
      <div className="session-form">

        <ul className="errors-list">
          {this.props.errors.map((error, idx) =>
            <li className="error" key={idx}>{error}</li>)}
        </ul>

        <input
          onChange={this.update("first_name")}
          className="form-input person-row"
          type="text"
          placeholder="First name"/>
        <br/>

        <input
          onChange={this.update("last_name")}
          className="form-input person-row"
          type="text"
          placeholder="Last name"/>
        <br/>

        <input
          onChange={this.update("email")}
          className="form-input email-row"
          type="text"
          placeholder="Email"/>
        <br/>

        <input
          onChange={this.update("password")}
          className="form-input password-row"
          type="password"
          placeholder="Password"/>
        <br/>

        <button
          className="submit-button"
          onClick={this.handleSubmit}>Signup
        </button>

        <div className="form-bottom">
          <p className="form-bottom-text">Don't have an account?</p>
          <Link className="other-form-button" to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default UserForm;
