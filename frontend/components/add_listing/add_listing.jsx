import React from 'react';
import { Link } from 'react-router';
import { merge } from 'lodash';

class AddListingHome extends React.Component {
  constructor(props) {
    super(props);
    this.handleHeader = this.handleHeader.bind(this);
  }

  componentDidMount() {
    this.props.updateListingForm({host_id: this.props.currentUser.id});
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  handleButton(step, element) {
    let form = this.props.listingFormState.current_form;
    switch (step) {
      case "step-one":
        if (form === "home" || form === "step-one") {
          return `${element}-next`;
        }
        else {
          return `${element}-previous`;
        }
      case "step-two":
        if (form === "home" || form === "step-one") {
          return `${element}-dead`;
        }
        else if (form === "step-two") {
          return `${element}-next`;
        }
        else {
          return `${element}-dead`;
        }
      case "step-three":
        if (form === "step-three") {
          return `${element}-next`;
        }
        else {
          return `${element}-dead`;
        }
      default:
        console.log("Button handler is broken");
        return null;
    }
  }

  handleHeader() {
    let user = this.props.currentUser;
    if (this.props.listingFormState.current_form === "home" ||
      this.props.listingFormState.current_form === "step-one") {
        return(<span>Hi, {user.first_name}! Let's get you ready to become a host.</span>);
    }
    else {
      return (<span>Become a Hairbnb host</span>);
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-home">
        <div className="alh-first-col">
          <span className="alh-header">{this.handleHeader()}</span>

          <div className="alh-step-container">
            <div className="alh-step-container-description">
              <span className={this.handleButton("step-one", "alh-step-name")}>STEP 1</span>
              <span className={this.handleButton("step-one", "alh-step-title")}>Start with the basics</span>
              <span className={this.handleButton("step-one", "alh-step-description")}>Listing title, description, etc.</span>
              <button className={this.handleButton("step-one", "alh-step-button")}></button>
            </div>
            <img src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478474954/Icons/check-mark-in-white-md.png" className={this.handleButton("step-one", "alh-check")}></img>
          </div>

          <div className="alh-step-container">
            <div className="alh-step-container-description">
              <span className={this.handleButton("step-two", "alh-step-name")}>STEP 2</span>
              <span className={this.handleButton("step-two", "alh-step-title")}>Set the scene</span>
              <span className={this.handleButton("step-two", "alh-step-description")}>Amenities and house rules</span>
              <button className={this.handleButton("step-two", "alh-step-button")}></button>
            </div>
            <img src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478474954/Icons/check-mark-in-white-md.png" className={this.handleButton("step-two", "alh-check")}></img>
          </div>

          <div className="alh-step-container">
            <div className="alh-step-container-description">
              <span className={this.handleButton("step-three", "alh-step-name")}>STEP 3</span>
              <span className={this.handleButton("step-three", "alh-step-title")}>Get ready for pups</span>
              <span className={this.handleButton("step-three", "alh-step-description")}>Address information and price</span>
              <button className={this.handleButton("step-three", "alh-step-button")}></button>
            </div>
            <img src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478474954/Icons/check-mark-in-white-md.png" className={this.handleButton("step-three", "alh-check")}></img>
          </div>

        </div>

        <div className="alh-second-col">
          <div className="alh-img-container">
            <div className="alh-tip-container">
              <img className="alh-tip-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478477881/Icons/Screen_Shot_2016-11-06_at_4.17.32_PM.png"/>
              <span className="alh-tip-description">In a week, hosts that shared their homes <br/>with dogs are:</span>
              <span className="alh-tip-quantity">184% happier</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default AddListingHome;
