import React from 'react';
import { Link, withRouter } from 'react-router';

class AddListingSecond extends React.Component {
  constructor(props) {
    super(props);
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

  handleNext() {
    return "alf-next";
  }

  handleNextClick(e) {
    e.preventDefault;
    this.props.updateListingForm({current_form: "ready-for-pups"});
    this.props.router.push('/become-a-host/ready');
  }

  handleButton(field) {
    let status = this.props.listingFormState[field];
    if (status) {
      return `alf-amenity-true alf-${field}`;
    }
    else {
      return `alf-amenity-false`;
    }
  }

  handleButtonClick(field) {
    return (e) => {
      e.preventDefault();
      let truthy = !(this.props.listingFormState[field])
      this.props.updateListingForm({[field]: truthy})
    }
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        <div className="alf-first-half">
          <div className="alf-col-first">
            <div className="alf-form">
              <span className="alf-field-title">Add amenities</span>
              <div className="alf-input-buttons">
                <div className="alf-input-column">
                  <button className={this.handleButton("dog_walks")}
                    onClick={this.handleButtonClick("dog_walks")}>Free dog walks
                  </button>
                  <button className={this.handleButton("deluxe_bed")}
                    onClick={this.handleButtonClick("deluxe_bed")}>Deluxe doggy bed
                  </button>
                  <button className={this.handleButton("house_cat")}
                    onClick={this.handleButtonClick("house_cat")}>House cat friend
                  </button>
                  <button className={this.handleButton("cuddle_buddy")}
                    onClick={this.handleButtonClick("cuddle_buddy")}>Cuddle buddy</button>
                </div>

                <div className="alf-input-column">
                  <button className={this.handleButton("gourmet_food")}
                    onClick={this.handleButtonClick("gourmet_food")}>Gourmet dog food
                  </button>
                  <button className={this.handleButton("chew_toys")}
                    onClick={this.handleButtonClick("chew_toys")}>Chew toys</button>
                  <button className={this.handleButton("frisbee")}
                    onClick={this.handleButtonClick("frisbee")}>Daily frisbee sessions
                  </button>
                  <button className={this.handleButton("mailman")}
                    onClick={this.handleButtonClick("mailman")}>Mailman visits</button>
                  <button className={this.handleButton("grooming")}
                    onClick={this.handleButtonClick("grooming")}>Free grooming</button>
                </div>
              </div>

              <span className="alf-field-title">Add house rules</span>

            </div>

            <div className="alf-nav">
              <Link to="/become-a-host/basics" className="alf-back">Back</Link>
              <button className={this.handleNext()} onClick={this.handleNextClick}>Next</button>
            </div>


          </div>
        </div>

        <div className="alf-second-half">
          <div className="alf-col-second">
            <div className="alf-tip-box">
              <img className="alh-tip-icon" src="https://res.cloudinary.com/dsguwnfdw/image/upload/v1478477881/Icons/Screen_Shot_2016-11-06_at_4.17.32_PM.png"/>
              <span className="alf-tip-content">
                This is your summary title and description. You can edit and change them as you see fit. Keeping it brief makes it easier for guests. Then just add a picture to get started!
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddListingSecond);
