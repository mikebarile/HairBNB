import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import Calendar from 'react-input-calendar';

class BookListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: null,
      check_out: null,
      guest_id: this.props.currentUser.id,
      host_id: this.props.currentListing.host_id,
      listing_id: this.props.currentListing.id,
      message: "default",
      status: "pending",
      errors: []
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
    if(newProps.myTrips.length > this.props.myTrips.length) {
      this.props.clearBookingErrors();
      this.setState({});
    }
    else if (newProps.errors.length > 0) {
      this.setState({errors: newProps.errors});
    }
  }

  update(field) {
    return value => {
      this[field] = value;
    };
  }

  handleSubmit(e) {
    if (this.check_in !== null && this.check_out !== null) {
      this.props.createBooking(this.state);
    }
    else {
      this.setState({errors: ["Please complete all fields"]});
    }
  }

  render() {
    let listing = this.props.currentListing;
    let today = new Date();

    return (
      <div className="sl-book-listing">
        <div className="slb-row">

          <div className="slb-col slb-col-first">
            <span className="slb-col-title">Check In</span>
            <Calendar
              format='MM/DD/YYYY'
              minDate={today}
              placeholder="mm/dd/yyyy"
              onChange={this.update("check_in")}
            />
          </div>

          <div className="slb-col">
            <span className="slb-col-title">Check Out</span>
            <Calendar
              format='MM/DD/YYYY'
              minDate={today}
              placeholder="mm/dd/yyyy"
              onChange={this.update("check_out")}
            />
          </div>

          <div className="slb-col slb-col-last">
            <span className="slb-col-title">Guests</span>
            <select className="slb-col-guests">
              <option defaultValue>1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
            </select>
          </div>
        </div>

        <ul className="slb-errors">
          {this.state.errors.map((error, idx) => (
            <span key={idx} className="slb-error">{error}</span>
          ))}
        </ul>

        <span className="slb-book" onClick={this.handleSubmit}>Book</span>

        <span className="slb-disclaimer">Your credit card won't be charged ever</span>
      </div>
    );
  }
}

export default withRouter(BookListing);
