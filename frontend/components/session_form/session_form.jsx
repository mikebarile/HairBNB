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

  otherForm() {
    if(this.props.formType === "login") {
      return "signup";
    }
    else {
      return "login";
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  render() {
    let otherPath = "/" + this.otherForm();
    return(
      <div className="sessionForm">
        <p>
          Welcome to BenchBNB!
          <br/>
          Please {this.props.formType} or <Link to={
            otherPath}>{this.otherForm()}</Link> instead
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

export default SessionForm;
