import React from 'react';
import { Link } from 'react-router';

class UserForm extends React.Component {
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
        <p>
          Welcome to HairBNB!
          <br/>
          Please signup or <Link to="/signup">login</Link> instead
        </p>

        <ul>
          {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <label>Email: <input
          onChange={this.update("email")} type="text"/>
        </label>
        <br/>

        <label>Password: <input
          onChange={this.update("password")} type="password"/>

        </label>
        <br/>

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default UserForm;
