import React from 'react';
import { Link, withRouter } from 'react-router';

class AddListingThird extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.textUpdate = this.textUpdate.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    if(this.props.currentUser === null){
      this.props.router.replace('/home');
    }
  }

  textUpdate(field, max) {
    return (e) => {
      e.target.style.height = "0px";
      e.target.style.height = (e.target.scrollHeight + 1)+"px";
      this.setState({[field]: max - e.target.value.length});
      this.props.updateListingForm({[field]: e.target.value});
    };
  }

  handleNext() {
    if (this.state.title < 50 && this.state.title >=0 &&
      this.state.description < 500 && this.state.description >= 0 &&
      this.state.url !== null && this.state.image_errors.length === 0) {
        return "alf-next";
    }
    else {
      return "alf-next-dead";
    }
  }

  handleNextClick(e) {
    e.preventDefault;
    if (this.state.title < 50 && this.state.title >=0 &&
      this.state.description < 500 && this.state.description >= 0 &&
      this.state.url !== null && this.state.image_errors.length === 0) {
        this.props.updateListingForm({current_form: "set-the-scene"});
        this.props.router.push('/become-a-host/scene');
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        <div className="alf-first-half">
          <div className="alf-col-first">
            <div className="alf-form">
              <span className="alf-field-title alf-extra-margin">Where's your place located?</span>
              <span className="alf-add-title">Street Address</span>
              <div className="alf-input-row">
                <textarea
                  ref="streetField"
                  placeholder="e.g. 123 Main Street"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("street_address", 50)}>
                </textarea>
              </div>

              <span className="alf-add-title">Apartment Number (optional)</span>
              <div className="alf-input-row">
                <textarea
                  ref="aptField"
                  placeholder="e.g. Apt #7"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("apt_num", 50)}>
                </textarea>
              </div>

              <span className="alf-add-title">Zip Code</span>
              <div className="alf-input-row">
                <textarea
                  placeholder="e.g. 94102"
                  ref="zipField"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("zip_code", 50)}>
                </textarea>
              </div>

              <span className="alf-add-title">City</span>
              <div className="alf-input-row">
                <textarea
                  placeholder="e.g. San Francisco"
                  ref="cityField"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("city")}>
                </textarea>
              </div>

              <span className="alf-add-title">Price Per Night</span>
              <div className="alf-input-row">
                <textarea
                  placeholder="e.g. 100.00"
                  ref="priceField"
                  className="alf-text-full-add"
                  onKeyUp={this.textUpdate("price")}>
                </textarea>
              </div>
            </div>

            <div className="alf-nav">
              <Link to="/become-a-host/scene" className="alf-back">Back</Link>
              <button className={this.handleNext()} onClick={this.handleNextClick}>Submit</button>
            </div>
          </div>
        </div>

        <div className="alf-second-half">
          <div className="alf-col-second">
            <div className="alf-tip-box">
              <img className="alh-tip-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478477881/Icons/Screen_Shot_2016-11-06_at_4.17.32_PM.png"/>
              <span className="alf-tip-content">
                It's the final stretch! Fill out your address information, set a price and you'll be ready to get started hosting.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddListingThird);
