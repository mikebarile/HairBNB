import React from 'react';
import { Link, withRouter } from 'react-router';

class AddListingSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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

  render() {
    let user = this.props.currentUser;
    return (
      <div className="add-listing-form">
        <div className="alf-first-half">
          <div className="alf-col-first">
            <div className="alf-form">
              <span className="alf-field-title">Name your place</span>

              <span className="alf-field-title">Edit your description</span>

              <span className="alf-field-title alf-header-over">Upload a photo</span>

            </div>

            <div className="alf-nav">
              <Link to="/become-a-host" className="alf-back">Back</Link>
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
