import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          password: ""
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

        <div className="form-input-row">
          <input
            onChange={this.update("email")}
            className="form-input"
            type="text"
            placeholder="Email"/>
        </div>
        <br/>

        <div className="form-input-row">
          <input
            onChange={this.update("password")}
            className="form-input"
            type="password"
            placeholder="Password"/>
        </div>
        <br/>

        <button
          className="submit-button"
          onClick={this.handleSubmit}>Login
        </button>

        <div className="form-bottom">
          <p className="form-bottom-text">Don't have an account?</p>
          <Link className="other-form-button" to="/signup">Signup</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
