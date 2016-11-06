import React from 'react';
import { Link } from 'react-router';
import { merge } from 'lodash';

class AddListingHome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateListingForm({host_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  handleButton(step) {
    let form = this.props.listingFormState.currentForm;
    switch (step) {
      case "step-one":
        if (form === "home" || form === "step-one") {
          return "alh-button-next";
        }
        else {
          return "alh-button-previous";
        }
      case "step-two":
        if (form === "home" || form === "step-one") {
          return "alh-button-dead";
        }
        else if (form === "step-two") {
          return "alh-button-next";
        }
        else {
          return "alh-button-dead";
        }
      case "step-three":
        if (form === "step-three") {
          return "alh-button-next";
        }
        else {
          return "alh-button-dead";
        }
      default:
        console.log("Button handler is broken");
        return null;
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-home">
        <div className="alh-first-col">
          <span className="alh-header">Hi, {user.first_name}! Let's get you ready to become a host.</span>

          <div className="alh-step-container">
            <span className="alh-step-name">STEP 1</span>
            <span className="alh-step-title">Start with the basics</span>
            <span className="alh-step-description">Listing title, description, etc.</span>
            <button className={this.handleButton("step-one")}></button>
          </div>

          <div className="alh-step-container">
            <span className="alh-step-name">STEP 2</span>
            <span className="alh-step-title">Set the scene</span>
            <span className="alh-step-description">Amenities and house rules</span>
            <button className={this.handleButton("step-two")}></button>
          </div>

          <div className="alh-step-container">
            <span className="alh-step-name">STEP 3</span>
            <span className="alh-step-title">Get ready for pups</span>
            <span className="alh-step-description">Address information and price</span>
            <button className={this.handleButton("step-three")}></button>
          </div>

        </div>

        <div className="alh-second-col">

        </div>
      </div>
    );
  }
}



export default AddListingHome;
